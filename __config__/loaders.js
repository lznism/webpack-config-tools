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
						}, {
							loader: 'postcss-loader', 
							options: {
								sourceMap: true
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
						}, {
							loader: 'postcss-loader', 
							options: {
								sourceMap: true
							}
						}],
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
					css: ['vue-style-loader', 'css-loader', {
						loader: 'postcss-loader', 
						options: {
							sourceMap: true
						}
					}],
					scss: ['vue-style-loader', 'css-loader', 'sass-loader', {
						loader: 'postcss-loader', 
						options: {
							sourceMap: true
						}
					}]
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
			}, {
				loader: 'postcss-loader', 
				options: {
					sourceMap: true
				}
			}]
		});
	} else {
		return ['style-loader', 'css-loader', {
			loader: 'postcss-loader', 
			options: {
				sourceMap: true
			}
		}];
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
			'sass-loader', {
				loader: 'postcss-loader', 
				options: {
					sourceMap: true
				}
			}]
		});
	} else {
		return ['style-loader', 'css-loader', 'sass-loader', {
			loader: 'postcss-loader', 
			options: {
				sourceMap: true
			}
		}];
	}
}

const babelLoader = () => ({
	test: /\.js$/,
	use: ['babel-loader?cacheDirectory=true'],
	include: path.resolve(__dirname, './src')
})

const imgLoader = () => ({
	test: /\.(png|jpe?g|gif|svg)$/,
	use: [{
		loader: 'url-loader',
		options: {
			limit: 8192,
			name: 'img/[name].[hash:7].[ext]'
		}
	}]
})

const jsonLoader = () => ({
	test: /\.json$/,
	use: ['json-loader']
})

const mediaLoader = () => ({
	test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [{
		loader: 'url-loader',
		options: {
			limit: 8192,
			name: 'img/[name].[hash:7].[ext]'
		}
	}]
})

const fontsLoader = () => ({
	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [{
		loader: 'url-loader',
		options: {
			limit: 8192,
			name: 'img/[name].[hash:7].[ext]'
		}
	}]
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