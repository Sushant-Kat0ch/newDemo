/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'disable': '#e6e9ed',
        'primary': '#0f57d1',
        'secondary': '#5c5c5c',
        'secondary-dark': '#404141',
      },
      fontSize: {
        '11': '11px',
        '9': '9px',
      },
      height: {
        '500': '500px',
      }
    },
  },
  plugins: [],
}