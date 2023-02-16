const CracoAlias = require("craco-alias");

module.exports = {
  // webpack: {
  //   configure: {
  //     module: {
  //       rules: [
  //         {
  //           type: "javascript/auto",
  //           test: /\.mjs$/,
  //           include: /node_modules/,
  //         },
  //       ],
  //     },
  //   },
  // },
  devServer: {
    port: 5003,
  },
  plugins: [{
    plugin: CracoAlias,
    options: {
      source: "tsconfig",
      tsConfigPath: "tsconfig.paths.json",
    },
  }, ],
};