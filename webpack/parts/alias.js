const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.alias = {
  resolve: {
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  },
};
