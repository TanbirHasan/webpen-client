/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Replace '480px' with your desired breakpoint value
      },
      colors: {
        lightPink: "#fceeed",
      },
    },
  },
  plugins: [],
};
