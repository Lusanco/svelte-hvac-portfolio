/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celestialBlue: "#3F99CF",
        lightCyan: "#E0FBFC",
        gunmetal: "#253237"
      },
    },
  },

  plugins: [],
};
