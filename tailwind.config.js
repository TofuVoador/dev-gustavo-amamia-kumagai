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
        primary: "#134074",
        secondary: "#13315C",
        "primary-contrast": "#EEF4ED",
        "secondary-contrast": "#8DA9C4",
        dark: "#0B2545",
      },
    },
  },
  plugins: [],
};
