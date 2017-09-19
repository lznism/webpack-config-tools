const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const getVueLoaderCfg = () => {
	let vueloader = {};
	vueloader.loader = 'vue-loader';
	if(isProd) {
		vueloader = {
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: [{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						}],
						fallback: 'vue-style-loader'
					}),
					scss: ExtractTextPlugin.extract({
						use: [{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						}, 'style-loader'],
						fallback: 'vue-style-loader'
					})
				}
			}
		};
	} else {
		vueloader = {
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ['vue-style-loader', 'css-loader'],
					scss: ['vue-style-loader', 'css-loader', 'sass-loader']
				}
			}
		};
	}
	return vueloader;
}

const getCSSLoader = () => {
	if(isProd) {
		return ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [{
				loader: 'css-loader',
				options: {
					minimize: true
				}
			}]
		});
	} else {
		return ['style-loader', 'css-loader'];
	}
}

const getSCSSLoader = () => {
	if(isProd) {
		return ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [{
				loader:'css-loader',
				options: {
					minimize: true
				}
			}, 
			'sass-loader']
		});
	} else {
		return ['style-loader', 'css-loader', 'sass-loader'];
	}
}

const babelLoader = () => ({
	test: /\.js$/,
	use: ['babel-loader?cacheDirectory=true'],
	include: path.resolve(__dirname, './src')
})

const imgLoader = () => ({
	test: /\.(png|jpe?g|gif|svg)$/,
	use: ['url-loader']
})

const jsonLoader = () => ({
	test: /\.json$/,
	use: ['json-loader']
})

const mediaLoader = () => ({
	test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: ['url-loader']
})

const fontsLoader = () => ({
	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: ['url-loader']
})

module.exports = {
	rules: [{
		test: /\.vue$/,
		use: getVueLoaderCfg()
	}, {
		test: /\.css$/,
		use: getCSSLoader()
	}, {
		test: /\.scss$/,
		use: getSCSSLoader()
	},
		babelLoader(),
		jsonLoader(),
		imgLoader(),
		mediaLoader(),
		fontsLoader()
	]
}