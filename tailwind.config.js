/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Include pages directory
    "./components/**/*.{js,ts,jsx,tsx}",  // Include components directory
    "./app/**/*.{js,ts,jsx,tsx}",  // Include app directory for the App Router
  ],
  theme: {
    extend: {
      colors: {
        radiantGreen: '#00FF00',  // Radiant Green color
      },
    },
  },
  plugins: [],
};
