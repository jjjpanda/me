const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: argv.mode === 'development' ? '[name].js' : '[name].[contenthash].js',
    clean: {
      keep: /^(img|CNAME)/,
    },
  },
  mode: argv.mode || "production",
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
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
  ]
});
