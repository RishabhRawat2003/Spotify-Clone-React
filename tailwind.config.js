/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        comingup: {
          '0%': { height: '15vh' },
          '100%': { height: '80%' }
        },
      },
    },
  },
  plugins: [],
}

