const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
      app: './src/App.jsx',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loader: "babel-loader"
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true
            }
          }, 
        ]},
        {
          test: /\.css$/,
          use: ["style-loader",'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          use: ['file-loader']
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@svgr/webpack',
              options: {
                babel: false,
                icon: true,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunks : ['app'],
        filename: 'index.html'
      }),
      new ErrorOverlayPlugin()
    ],
    devtool: 'cheap-module-source-map', 
}