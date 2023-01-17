/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
