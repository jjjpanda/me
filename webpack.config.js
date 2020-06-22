const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/css'),
  varFile: path.join(__dirname, './src/css/variables.less'),
  mainLessFile: path.join(__dirname, './src/css/index.less'),
  themeVariables: [
    '@primary-color',
    '@success-color', // success state color
    '@warning-color', // warning state color
    '@error-color', // error state color
    '@timeline-color',
    '@layout-body-background',
  ],
  indexFileName: "index.html",
  generateOnce: false,
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  publicPath: ".",
  customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
}

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
      new AntDesignThemePlugin(options),
      new ErrorOverlayPlugin(),
    ],
    devtool: 'cheap-module-source-map', 
}