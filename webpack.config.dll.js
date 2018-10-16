
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const vendors = [
    'react',
    'react-dom',
    // 'react-router',
    // ...其它库
];

module.exports = {
  output: {
    path: path.join(__dirname, './static/webpack_dll'),
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
      "lib": vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './manifest.json'),
      name: '[name]',
      context: __dirname,
    }),
  ],
}