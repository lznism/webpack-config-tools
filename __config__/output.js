const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    filename: isProd ? 'js/[name].[chunkhash].js' :'js/[name].js',
    path: path.resolve(__dirname, './build')
}