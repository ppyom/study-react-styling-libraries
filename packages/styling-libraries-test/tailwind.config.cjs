/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../ui/src/tailwind-css/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ebd19d",
        secondary: "#3f97af",
        black: "#21201f",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
