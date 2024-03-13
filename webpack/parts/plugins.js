const glob = require('glob')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')

const { purgeCSSPath } = require('./utils')

exports.bundleAnalyzerPlugin = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: false,
      analyzerPort: 9080
    })
  ]
}

exports.cleanWebpackPlugin = {
  plugins: [new CleanWebpackPlugin()]
}

exports.htmlWebpackPlugin = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Internet Provider UI',
      template: './public/index.ejs',
      hash: true
    })
  ]
}

exports.miniCssExtractPlugin = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
}

exports.purgeCSSWebpackPlugin = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(purgeCSSPath),
      extractors: [
        {
          extractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['html']
        }
      ]
    })
  ]
}

exports.compressionPlugin = {
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11
        }
      },
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
