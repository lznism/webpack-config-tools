const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: [{
		loader: 'babel-loader',
		options: {
			presets: ['env']
		}
	}]
};

const cssLoader = {
	test: /\.css$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: 'css-loader'
	})
};

const sassLoader = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'sass-loader']
	})
};

const lessLoader = {
	test: /\.less$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'less-loader']
	})
};

const urlLoader = {
	test: /\.(png|jpg|gif)$/,
	use: [{
		loader: 'url-loader',
		options: {
			limit: 8192
		}
	}]
};

module.exports = {
	jsLoader: jsLoader,
	cssLoader: cssLoader,
	sassLoader: sassLoader,
	lessLoader: lessLoader,
	urlLoader: urlLoader
};