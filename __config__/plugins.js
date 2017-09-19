const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
	new webpack.DefinePlugin({
		'process.env': JSON.stringify(process.env.NODE_ENV)
	})
];

if(isProd) {
	plugins.push(
		// CSS提取插件
		new ExtractTextPlugin({
			filename: 'css/style.[contenthash].css'
		}),
		// 压缩插件
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}),
		// CSS优化插件
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
			  	safe: true
			}
		}),
		// html注入插件
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template:  './src/template/tpl.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		}),
		// 当vendor不变时，module.id不变，利用缓存
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module, count) => {
				return module.resource 
					&& /\.js$/.test(module.resource) 
					&& module.resource.indexOf(path.resolve(__dirname, './node_modules')) === -1;
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		// 本地gzip预压缩
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|css)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new BundleAnalyzerPlugin()
	)
} else {
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/template/tpl.html',
			inject: true
		}),
		new FriendlyErrorsPlugin()
	)
}

module.exports = plugins;