const webpack_merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.config.base')
const path = require('path')
const port = 8008

module.exports = webpack_merge(base, {
  devServer: {
    port,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    }, // 报错全屏覆盖
  },
  output: {
    filename: '[name].bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'src') // 打包出口，即打包后的文件会放在这个目录下
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})