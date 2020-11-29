const patchWebpackConfig = require("../../monorepo-tools/webpack");

const config = {
  webpack: patchWebpackConfig,
};

module.exports = config;
