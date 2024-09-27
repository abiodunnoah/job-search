import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Open Sans", ..._fontFamily.sans],
    },
    colors: {
      "brand-gray-1": "#dadce0",
      "brand-blue-1": "#1967d2",
      "brand-blue-2": "#4285f4",
      "brand-green-1": "#137333",
    },
    boxShadow: {
      blue: "0 0 3px 3px #4285f4",
    },
  },
};
export const variants = {
  extend: {
    margin: ["first"],
  },
};
export const plugins = [];

// const defaultTheme = require("tailwindcss/defaultTheme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
//       },
//       colors: {
//         "brand-gray-1": "#dadce0",
//         "brand-blue-1": "#1967d2",
//         "brand-green-1": "#137333",
//       },
//       boxShadow: {
//         blue: "0 0 3px 3px #4285f4",
//       },
//     },
//   },
//   variants: {
//     extend: {
//       margin: ["first"],
//     },
//   },
//   plugins: [],
// };
