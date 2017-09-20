const isProd = process.env.NODE_ENV === 'production';
module.exports = isProd ? '#source-map' : 'cheap-module-eval-source-map';