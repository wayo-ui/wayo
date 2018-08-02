const Webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Config = require('./config');
const BasicWebpackConfig = require('./webpack.config.base.js');

module.exports = Merge(BasicWebpackConfig, {
  devtool: false,
  mode: 'production',
  entry: {
    'wayo': `${Config.SourceDir}/index.js`,
  },
  output: {
    path: Config.DistDir,
    filename: '[name].min.js',
    publicPath: './',
    library: 'WAYO',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }, 'sass-loader']
    }]
  },
  plugins: [
    new Webpack.BannerPlugin(`WAYO version ${Config.Version}`),
    new CleanWebpackPlugin(Config.DistDir, {
      root: Config.RootDir
    }),
    new MiniCssExtractPlugin({
      filename: 'wayo.min.css'
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      'VERSION': JSON.stringify(`${Config.Version}`),
      'APPNAME': JSON.stringify(`${Config.Appname}`)
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