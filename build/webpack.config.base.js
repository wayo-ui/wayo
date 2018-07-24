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
        name: 'assets/[name].[ext]'
      }
    }, {
      test: /fonts\/\w+\.(svg|ttf|woff)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]'
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader', {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }
          ],
          scss: [
            'vue-style-loader', {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }, {
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
      '@constants': `${Config.SourceDir}/constants`,
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