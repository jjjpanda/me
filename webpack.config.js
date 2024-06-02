const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name]-[contenthash].js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
                lessOptions: {
                    math: 'always',
                    javascriptEnabled: true,
                }
            }
          }
        ]
      },
      {
        test: /\.png$/,
        type: 'asset/inline'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
  ]
};

module.exports = config;