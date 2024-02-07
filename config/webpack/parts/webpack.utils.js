const fs = require('fs')
const path = require('path')

const mainPath = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => path.resolve(mainPath, relativePath)

exports.paths = {
  app: resolvePath('.'),
  public: resolvePath('public'),
  dist: (distPath) => resolvePath(distPath),
  src: resolvePath('src')
}

exports.resolvePath = resolvePath

exports.regExp = {
  css: /\.(sa|sc|c)ss$/,
  img: /\.(jpe?g|gif|png)$/,
  js: /\.(jsx?)$/,
  sourceMap: /\.js$/
}

const moduleFileExtensions = ['js', 'jsx', 'ts', 'tsx']

exports.moduleFileExtensions = moduleFileExtensions.map((ext) => `.${ext}`)

exports.purgeCSSPath = resolvePath('src/*.js')
