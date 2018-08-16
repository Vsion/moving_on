const webpack_merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.config.base')
const path = require('path')
const port = 8008
console.log("use development webpack config...")
module.exports = webpack_merge(base, {
  devServer: {
    port,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    inline: true,
    overlay: {
      warnings: false,
      errors: true
    }, // 报错全屏覆盖
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})