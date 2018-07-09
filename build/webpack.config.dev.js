const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BasicWebpackConfig = require('./webpack.config.base.js');
const Config = require('./config');

module.exports = Merge(BasicWebpackConfig, {
  devtool: '#source-map',
  mode: 'development',
  entry: {
    'index': `${Config.ExampleDir}/index.js`
  },
  devServer: {
    hot: true,
    port: 9998,
    inline: true,
    clientLogLevel: 'error',
    contentBase: Path.resolve(__dirname,'../debug'),
    index: 'index.html'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader', 
        'sass-loader'
      ]
    },{
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${Config.ExampleDir}/index.html`,
      filename: 'index.html',
      inject: true
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      },
      'VERSION': JSON.stringify(`${Config.Version}`),
      'APPNAME': JSON.stringify(`${Config.Appname}`)
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
});