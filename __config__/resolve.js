const path = require('path');
module.exports = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src')
    }
}