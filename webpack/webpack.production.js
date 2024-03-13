process.env.NODE_ENV = 'production'
process.env.APP_ENV = 'production'

require('dotenv-override').config()
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { cssDevelopmentLoaders } = require('./parts/css.js')
const { sourceMapLoader } = require('./parts/js.js')
const { bundleAnalyzerPlugin } = require('./parts/plugins.js')
const { paths, webpackDefinePlugin } = require('./parts/utils.js')
const { dist } = require(`../server/production/server-config`)
const config = require(`../server/production/resources`)
// const config = require(`../server/local/resources`)

const prodConfig = {
  mode: 'production',
  output: {
    filename: `[name]-[contenthash].bundle.js`,
    path: paths.dist(dist),
    publicPath: '/'
  },
  devtool: 'inline-source-map'
}

module.exports = merge(
  commonConfig,
  webpackDefinePlugin(config),
  prodConfig,
  cssDevelopmentLoaders,
  sourceMapLoader,
  bundleAnalyzerPlugin
)
