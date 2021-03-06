

module.exports = {
    module: require("./__config__/loaders"),
    entry: require('./__config__/entry'),
    output: require('./__config__/output'),
    plugins: require('./__config__/plugins'),
    resolve: require('./__config__/resolve'),
    devtool: require('./__config__/devtool'),
    devServer: require('./__config__/dev-server')
}