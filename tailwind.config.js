/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp': "#128c7e",
        'whatsappDark': "#075e54",
        'whatsappLight': "#25d366",
        'primary': "#c30318",
        'secondary': "#d1ad04"
      }
    },
  },
  plugins: [],
}