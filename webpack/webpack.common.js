const { merge } = require('webpack-merge')
const { moduleFileExtensions, paths } = require('./parts/utils.js')
const { jsLoader } = require('./parts/js.js')
const { svgLoader } = require('./parts/asset.js')
const { alias } = require('./parts/alias.js')
const {
  cleanWebpackPlugin,
  htmlWebpackPlugin,
  purgeCSSWebpackPlugin,
  compressionPlugin
} = require('./parts/plugins.js')

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

module.exports = merge(
  commonConfig,
  alias,
  jsLoader,
  svgLoader,
  htmlWebpackPlugin,
  cleanWebpackPlugin,
  purgeCSSWebpackPlugin,
  compressionPlugin
)
