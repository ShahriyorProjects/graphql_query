/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   wave: {
      //     '0%': { transform: ' translate(0px, 0px)' },
      //     '10%': { transform: ' translate(8px, 4px)' },
      //     '20%': { transform: ' translate(14px, 8px);' },
      //     '30%': { transform: ' translate(18px, 7px);' },
      //     '40%': { transform: ' translate(20px, 8px);' },
      //     '50%': { transform: ' translate(18px, 6px);' },
      //     '60%': { transform: ' translate(14px, 4px);' },
      //     '100%': { transform: ' translate(0px, 0px);' },
      //   },
        
      // },
      // animation: {
      //   'waving-hand': 'wave 7s linear infinite',
      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
