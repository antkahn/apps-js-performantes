// craco.config.js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function ({ env }) {
  const isProductionBuild = process.env.NODE_ENV === "production";
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE
    ? "server"
    : "json";

  const plugins = [];

  if (isProductionBuild) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode }));
  }

  return {
    webpack: {
      plugins,
      configure: {
        // optimization: {
        //   splitChunks: {
        //     chunks: "all",
        //     maxInitialRequests: Infinity,
        //     minSize: 0,
        //     cacheGroups: {
        //       vendor: {
        //         test: /[\\/]node_modules[\\/]/,
        //         enforce: true,
        //         name(module) {
        //           // get the name. E.g. node_modules/packageName/not/this/part.js
        //           // or node_modules/packageName
        //           const packageName = module.context.match(
        //             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
        //           )[1];
        //           // npm package names are URL-safe, but some servers don't like @ symbols
        //           return `npm.${packageName.replace("@", "")}`;
        //         },
        //       },
        //     },
        //   },
        // },
      },
    },
  };
};
