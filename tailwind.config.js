const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#00008C",
      },
      secondary: {
        DEFAULT: "#FFC20E",
      },
    },
  },
  plugins: [],
});
