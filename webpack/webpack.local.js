process.env.NODE_ENV = 'development'
process.env.APP_ENV = 'local'

require('dotenv-override').config()
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { paths, webpackDefinePlugin } = require('./parts/utils.js')
const { cssDevelopmentLoaders } = require('./parts/css.js')
const { sourceMapLoader } = require('./parts/js.js')
const { bundleAnalyzerPlugin } = require('./parts/plugins.js')
const { dist, port } = require('../server/local/server-config')
const config = require('../server/local/resources')

const localConfig = {
  mode: 'development',
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: paths.dist(dist),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    port,
    hot: true,
    historyApiFallback: {
      index: '/index.html'
    },
    client: {
      overlay: false
    }
  }
}

module.exports = merge(
  commonConfig,
  webpackDefinePlugin(config),
  localConfig,
  cssDevelopmentLoaders,
  sourceMapLoader,
  bundleAnalyzerPlugin
)
