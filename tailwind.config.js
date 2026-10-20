/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_start: "#496F74",
        brand_middle:"#6E9195",
        brand_end:"#2D4F61",
        primary: "#284B63",
        heading: "#2D3748",
        form_colour: "#FAFAFA",
        quote_background_start:"#517879",
        quote_background_end:"#1E3E57",
      },
    },
  },
  plugins: [],
}

