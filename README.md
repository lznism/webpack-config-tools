### 介绍
一份适用于开发环境和生产环境的webpack配置文件

### loaders介绍

|loader名称        |主要功能         |添加时间    |
| ---------------- | ------------- | --------- |
|babel-loader      |处理ES6+的js    |2017-09-19|
|vue-loader        |处理vue文件     |2017-09-19|
|css-loader        |处理css文件     |2017-09-19|
|sass-loader       |处理sass文件    |2017-09-19|
|json-loader       |处理json文件    |2017-09-19|
|url-loader        |处理url文件     |2017-09-19|

### plugins介绍

| 插件名 | 功能 | 添加时间 |
| ---------------- | ------------- | --------- |
| DefinePlugin | 定义当前执行环境的插件 | 2017-09-19 |
| ExtractTextPlugin | 提取CSS插件 | 2017-09-19 |
| UglifyJsPlugin | 压缩JS插件 | 2017-09-19 |
| OptimizeCSSPlugin | 优化提取后的CSS插件 | 2017-09-19 |
| HtmlWebpackPlugin | 将生成的JS，CSS文件插入到HTML文件中 | 2017-09-19 |
| HashedModuleIdsPlugin | 唯一的module.id插件 | 2017-09-19 |
| CommonsChunkPlugin | 公共代码提取插件 | 2017-09-19 |
| CompressionPlugin | 预GZIP压缩插件 | 2017-09-19 |
| BundleAnalyzerPlugin | 打包分析插件 | 2017-09-19 |
| HotModuleReplacementPlugin | 热重载插件 | 2017-09-19 |
| NoEmitOnErrorsPlugin | 跳过编译时出错的代码并记录插件 | 2017-09-19 |
| FriendlyErrorsPlugin | 错误提示插件 | 2017-09-19 |