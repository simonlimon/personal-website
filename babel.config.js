module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      { libraryName: "vue-antd-ui", libraryDirectory: "es", style: "css" }
    ]
  ]
};
