module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            api: "./src/api",
            assets: "./assets",
            components: "./src/components",
            data: "./src/data",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
