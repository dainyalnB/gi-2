const StyleLintPlugin = require('stylelint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const { EnvironmentPlugin, HotModuleReplacementPlugin } = require('webpack');

const { GENERAL, PATHS } = require('../settings');

module.exports = merge(common({ development: true }), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    hot: true,
    overlay: false,
    staticOptions: {
      redirect: false,
    },
    port: 8000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        exclude: /node_modules/,
        // 
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          "resolve-url-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: PATHS.devIndex.output,
      template: PATHS.devIndex.input,
      title: GENERAL.name,
    }),
    new EnvironmentPlugin({
      // * explicitly setting the node environment variable for clarity
      NODE_ENV: 'development',
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new CopyWebpackPlugin([
      {
        context: PATHS.assets,
        from: '**/*',
        to: 'static/assets/',
      },
    ]),
  ],
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
});
