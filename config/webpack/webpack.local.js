process.env.NODE_ENV = 'development'

require('dotenv-override').config()
const { mergeWithCustomize, customizeArray, customizeObject } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const { paths } = require('./parts/webpack.utils')
const { cssDevelopmentLoaders } = require('./parts/webpack.css-config')
const { sourceMapLoader } = require('./parts/webpack.js-config')
const { bundleAnalyzerPlugin } = require('./parts/webpack.plugins-config')
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

const webpackDefinePlugin = (config) => ({
  plugins: [
    new webpack.DefinePlugin({
      Resources: JSON.stringify({ ...config })
    })
  ]
})

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    'entry.*': 'prepend'
  }),
  customizeObject: customizeObject({
    entry: 'prepend'
  })
})(commonConfig, webpackDefinePlugin(config), localConfig, cssDevelopmentLoaders, sourceMapLoader, bundleAnalyzerPlugin)
