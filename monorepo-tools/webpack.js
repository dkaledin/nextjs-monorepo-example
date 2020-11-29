/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  compilerOptions: { paths },
} = require("../tsconfig.json");

function patchWebpackConfig(config) {
  const alias = Object.keys(paths).reduce(
    (result, key) => ({
      ...result,
      [key]: paths[key][0],
    }),
    {}
  );
  const hackedConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...alias,
      },
    },
  };

  hackedConfig.module.rules[0].include.push(path.resolve(__dirname, "../libs"));

  return hackedConfig;
}

module.exports = patchWebpackConfig;
