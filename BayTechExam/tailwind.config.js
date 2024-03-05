/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainBackgroundColor": '#B2BD8C',
        "columnBackgroundColor": ' #434733',
      }
    },
  },
  plugins: [],
}

