const Webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Config = require('./config');
const BasicWebpackConfig = require('./webpack.config.base.js');

module.exports = Merge(BasicWebpackConfig, {
  devtool: false,
  mode: 'production',
  entry: {
    'index': `${Config.ExampleDir}/index.js`,
  },
  output: {
    path: `${Config.ExampleDir}/dist`,
    filename: '[name].min.js',
    chunkFilename: 'pages/[name].min.js',
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader', 
        'sass-loader'
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  resolve: {
    alias: {
      'wayo': `${Config.SourceDir}/index.js`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${Config.ExampleDir}/index.html`,
      filename: 'index.html',
      inject: true
    }),
    // new ExtractTextPlugin("index.min.css"),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      },
      'VERSION': JSON.stringify(`${Config.Version}`),
      'APPNAME': JSON.stringify(`${Config.Appname}`)
    }),
    new CleanWebpackPlugin(`${Config.ExampleDir}/dist`,{
      root: Config.ExampleDir
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
});