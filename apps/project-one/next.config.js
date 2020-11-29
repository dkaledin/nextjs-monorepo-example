const { patchWebpackConfig } = require("nextjs-monorepo-tools");

const config = {
  webpack: patchWebpackConfig({
    commonDirs: ["libs"],
  }),
};

module.exports = config;
