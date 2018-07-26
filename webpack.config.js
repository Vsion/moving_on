const path = require("path")
const port = 8008
const publicPath = '/dist/'
const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      'node_modules',
    ],
    extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: "css-loader"
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0']
            }
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port,
    publicPath,
    contentBase: require('path').join(__dirname, "dist"),
  },
}