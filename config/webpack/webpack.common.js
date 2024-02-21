const { merge } = require('webpack-merge')
const { moduleFileExtensions, paths } = require('./parts/webpack.utils')
const { jsLoader } = require('./parts/webpack.js-config')
const { svgLoader } = require('./parts/webpack.asset-config')
const { alias } = require('./parts/webpack.alias')
const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./parts/webpack.plugins-config')

const commonConfig = {
  mode: 'none',
  context: paths.app,
  entry: {
    app: ['./src/index.ts']
  },
  resolve: {
    extensions: moduleFileExtensions
  }
}

module.exports = merge(commonConfig, alias, jsLoader, svgLoader, htmlWebpackPlugin, cleanWebpackPlugin)
