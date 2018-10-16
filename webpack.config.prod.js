const webpack = require('webpack')
const webpack_merge = require('webpack-merge')
const base = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const path = require('path')

console.log("use production webpack config...")

module.exports = webpack_merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        },
        // manifest: {
        //   name: 'manifest',
        //   minChunks: Infinity
        // }
        // commons: {
        //   name: "commons",
        //   chunks: 'initial',
        //   minChunks: 2
        // },
      }
    }
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
    new WebpackDeepScopePlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ]
})