/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp': "#25D366",
        'primary': "#c30318",
        'secondary': "#d1ad04"
      }
    },
  },
  plugins: [],
}