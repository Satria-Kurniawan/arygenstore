/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#E9AFFC",
        tertiary: "#CFE0FF",
        light: "#F8F8F8",
        label: "#9A9A9A",
      },
    },
  },
  plugins: [],
};
