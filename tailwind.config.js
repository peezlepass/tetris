/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "empty-cell-color": "rgb(186, 186, 186)",
        "empty-cell-border": "rgb(156, 156, 156)",
      },
      fontFamily: {
        gameOver: ['"Press Start 2P"', "system-ui"],
      },
    },
  },

  plugins: [],
};
