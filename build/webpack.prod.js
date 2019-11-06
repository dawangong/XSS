const webpack = require("webpack");
const { baseConfig, pluginConfig } = require('webpack.base');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'prod'
    })
  ].concat(pluginConfig),
  ...baseConfig
};
