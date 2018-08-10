const path = require("path")
const host = 'localhost'
const port = 8008
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {

  const devMode = argv.mode !== 'production'
  return {
    devServer: {
      host,
      port,
      hot: true,
      // contentBase: __dirname + '/src'
    },
    devtool: '#cheap-module-eval-source-map',
    entry: [
      "babel-polyfill",
      path.join(__dirname, '/src/entry/index.js')
    ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js",
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
          use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader',
          ]
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
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    node: {
      fs: "empty"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
}