const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const _ExtractTextPlugin = new ExtractTextPlugin('style.css');

const _HtmlWebpackPlugin = new HtmlWebpackPlugin({
	title: title,
	filename: filename,
	template: path.resolve(templatePath, filename),
	favicon: path.resolve(faviconPath, filename)
});

const _DefinePlugin = new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify(environment)
});