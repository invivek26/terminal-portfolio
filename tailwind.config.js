/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#000000",
        },
        secondary: {
          100: "#ffff",
        },
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};