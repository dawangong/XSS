const { baseConfig, pluginConfig } = require('./webpack.base');

module.exports = {
  plugins: [].concat(pluginConfig),
  ...baseConfig
};
