/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // celestialBlue: "rgb(27, 155, 212)",
        celestialBlue: "#1B9BD4",
        gunmetal: "#253237",
      },
    },
  },

  plugins: [],
};
