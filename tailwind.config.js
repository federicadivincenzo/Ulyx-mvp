/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'main-blue': '#00204A',
      'main-gray-text': '#D9D9D9',
      'main-orange': '#FF8B00',
      'dark-blue': '#162942',
      'mid-blue': '#23436D',
      'card-blue': '#151D29'
    },
    extend: {},
  },
  plugins: [],
}

