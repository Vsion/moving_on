'use strict'

let config

if (process.env.NODE_ENV === 'production') {
  config = require('./webpack.config.prod')
} else {
  config = require('./webpack.config.dev')
}

module.exports = config