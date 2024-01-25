/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C0753",
        secondary: "#492E87",
        blue: "#071952",
        gray: "#B6BBC4",
        purple: "#720455",
      },
    },
  },
  plugins: [],
};
