/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5a0b4d",
        secondary: "#6e2594",
        blue: "#0a122a",
        indigo: "#b882ee",
      },
    },
  },
  plugins: [],
};
