const TerserPlugin = require('terser-webpack-plugin')
const { regExp } = require('./webpack.utils')

exports.jsLoader = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}

exports.minifyJavaScript = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
}

exports.sourceMapLoader = {
  module: {
    rules: [
      {
        test: regExp.sourceMap,
        use: {
          loader: 'source-map-loader'
        },
        enforce: 'pre'
      }
    ]
  }
}
