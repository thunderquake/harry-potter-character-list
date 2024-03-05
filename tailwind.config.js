/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dun: "#ddc8a6",
        hpbrown: "#594e36",
        hpdarkbrown: "#2f2504",
        hpblue: "#000029",
      },
    },
  },
  plugins: [],
};
