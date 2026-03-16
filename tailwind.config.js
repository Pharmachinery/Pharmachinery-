/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        30: ".30",
        70: ".70",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
