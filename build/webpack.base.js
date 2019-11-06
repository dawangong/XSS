const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV;

console.log(NODE_ENV, 'NODE_ENV');

const baseConfig = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].min.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /build/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'stage-2'
              ],
              plugins: [
                [
                  'transform-runtime',
                  {
                    'polyfill': true,
                    'regenerator': true
                  }
                ]
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            outputPath: 'images/',
            limit: 10000
          }
        }]
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    open: true,
    contentBase: './dist',
    host: 'localhost',
    port: 9000,
    compress: true
  }
};

const pluginConfig = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(['dist'])
];

module.exports = {
  baseConfig,
  pluginConfig
};
