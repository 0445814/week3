const path = require("path");

export default {
  base: "/week3/",
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/styles/global/_breakpoints.scss";',
    },
  },
  alias: {
    "/@/": path.resolve(__dirname, "./src"),
  },
};
