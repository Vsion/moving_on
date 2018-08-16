const webpack = require('webpack')
const webpack_merge = require('webpack-merge')
const base = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

console.log("use production webpack config...")

module.exports = webpack_merge(base, {
  mode: 'production',
  optimization: {
    minimize: true,
    // minimizer:
    // [
    //   new UglifyJsPlugin({
    //     sourceMap: true,
    //     uglifyOptions: {
    //       compress: {
    //         dead_code: true,
    //         unused: true,
    //       },
    //       // output: {
    //       //   comments: false,
    //       // }
    //     }
    //   })
    // ]
  },
  plugins:[
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          dead_code: true,
          unused: true,
        },
        // output: {
        //   comments: false,
        // }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
})