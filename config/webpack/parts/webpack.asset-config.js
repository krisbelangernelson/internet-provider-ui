exports.svgLoader = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }]
      },
      {
        test: /\.jpg/,
        type: 'asset/resource'
      }
    ]
  }
}
