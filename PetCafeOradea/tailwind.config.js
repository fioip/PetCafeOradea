/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'navbar': '1fr 3fr', // Adjust the fraction values to your preference
      },
    },
  },
  plugins: [],
}
