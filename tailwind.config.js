/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/pages/*.jsx"],
  theme: {
    extend: {
      colors: {
        dun: "#ddc8a6",
        harrypotterbrown: "#594e36",
        harrypotterdarkbrown: "#2f2504",
        hpblue: "#000029",
      },
    },
  },
  plugins: [],
};
