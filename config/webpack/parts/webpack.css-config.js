const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { regExp } = require('./webpack.utils');

const miniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
};

const styleLoader = {
  loader: 'style-loader',
};

const cssLoader = {
  loader: 'css-loader',
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            // No Options
          },
        ],
      ],
    },
  },
};

const sassLoader = {
  loader: 'sass-loader',
};

const commonLoaders = [cssLoader, postcssLoader, sassLoader];
const developmentLoaders = [styleLoader].concat(commonLoaders);
const productionLoaders = [miniCssExtractPluginLoader].concat(commonLoaders);

exports.cssDevelopmentLoaders = {
  module: {
    rules: [
      {
        test: regExp.css,
        use: developmentLoaders,
        sideEffects: true
      },
    ],
  },
};

exports.cssProductionLoaders = {
  module: {
    rules: [
      {
        test: regExp.css,
        use: productionLoaders,
        sideEffects: true
      },
    ],
  },
};

exports.minifyCSS = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default'],
        },
      }),
    ],
  },
};
