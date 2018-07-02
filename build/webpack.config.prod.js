const Webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Config = require('./config');
const BasicWebpackConfig = require('./webpack.config.base.js');

module.exports = Merge(BasicWebpackConfig,{
  devtool: false,
  mode: 'production',
  entry: {
    'wayo': `${Config.SourceDir}/index.js`,
  },
  output: {
    path: Config.DistDir,
    filename: '[name].min.js',
    publicPath: '/',
    library: 'WAYO',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','sass-loader']
      })
    }]
  },
  plugins: [
    new Webpack.BannerPlugin(`WAYO version ${Config.version}`),
    new ExtractTextPlugin("wayo.min.css"),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      },
      'VERSION': JSON.stringify(`${Config.Version}`)
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
    new Webpack.HashedModuleIdsPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin()
  ]
});