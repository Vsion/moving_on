const webpack_merge = require('webpack-merge')
const base = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = webpack_merge(base, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 打包出口，即打包后的文件会放在这个目录下
  },
  optimization: {
    minimizer: true,
    // [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       sourceMap: true,
    //       comments: false,
    //       unused: true,
    //       dead_code: true,
    //     }
    //   })
    // ]
  },
  plugins:[
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: new RegExp('\\.(js|css)$'),
    //   threshold: 50240,
    //   minRatio: 0.8
    // }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
})