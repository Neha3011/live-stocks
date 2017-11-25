const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + (path.resolve('./node_modules'))
];

const config = {
  'devtool': 'source-map',
  'entry': [
    './src/index.js'
  ],
  'module': {
    'loaders': [{
      'test': /\.js$/,
      'exclude': /node_modules/,
      'loader': 'react-hot-loader/webpack'
    }, {
      'test': /\.js$/,
      'exclude': /node_modules/,
      'loaders': 'babel-loader'
    }, {
      'test': /\.(scss|css)$/,
      'loader': ExtractTextPlugin.extract({
        'fallback': 'style-loader',
        'use': sassLoaders.join('!')
      })
    }]
  },
  'resolve': {
    'extensions': ['.js', '.sass'],
    'alias': {
      'immutable': path.resolve(__dirname, 'node_modules/immutable')
    }
  },
  'output': {
    'path': path.resolve(__dirname, './dist'),
    'publicPath': '/',
    'filename': 'scripts/bundle.js'
  },
  'devServer': {
    'contentBase': './dist',
    'historyApiFallback': true,
    'hot': true,
    'disableHostCheck': true
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'template': './index.html',
      'filename': 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles/[name].[hash].css')
  ]
};

module.exports = config;
