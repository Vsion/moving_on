const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/entry/index.js',
    // test: './src/entry/test.module.js',
    vendor: [
      'lodash',
      'react',
    ]
  },
  output: {
    filename: '[name].[chunkhash].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 打包出口，即打包后的文件会放在这个目录下
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      'node_modules',
    ],
    extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     name: 'manifest',
  //     // cacheGroups: {
  //     //   manifest: {
  //     //     name: 'manifest',
  //     //     minChunks: Infinity
  //     //   }
  //     // }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test_project',
      favicon: './V.ico',
      template: 'src/templates/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    // new webpack.DllPlugin({
    //   path: path.join(__dirname, './manifest.json'),
    //   name: '[name].[chunkhash].js',
    // }),
  ]
}