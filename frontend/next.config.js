const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = withLess(withTypescript({
  webpack(config, options) {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }
    return config
  }
}));