/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3B577',
        secondary: '#ECEAE3',
        product_bg: '#F5F4F1',
        dark_01: '#331A15',
      },
      fontFamily: {
        'rancho': ['Rancho', 'cursive'],
        'raleway': ['Raleway', 'cursive']
      }
    },
  },
  plugins: [],
}

