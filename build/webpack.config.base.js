const Path = require('path');
const Config = require('./config');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    path: Config.DistDir,
    filename: '[name].js',
    publicPath: '/'
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        sourceMap: true,
      },
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'assets/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader',{
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }
          ],
          scss: [
            'vue-style-loader',{
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },{
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        },
        postLoaders: {
          html: 'babel-loader?sourceMap'
        },
        sourceMap: true,
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': Config.SourceDir,
      '@styles': `${Config.SourceDir}/styles`,
      '@components': `${Config.SourceDir}/components`,
      '@utils': `${Config.SourceDir}/utils`,
      '@mixins': `${Config.SourceDir}/mixins`,
      '@locale': `${Config.SourceDir}/locale`,
      '@directives': `${Config.SourceDir}/directives`,
      'vue': 'vue/dist/vue.esm.js'
    }
  }
};