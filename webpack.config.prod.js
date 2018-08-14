const webpack_merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = webpack_merge(base, {
  mode: 'production',
})