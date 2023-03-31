/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      oswald:"Oswald , sans-serif",
      urbanis:"Urbanist , sans-serif"
    },
    extend: {},
  },
  plugins: [],
}