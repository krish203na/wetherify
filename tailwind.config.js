/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        enterAnimation:{
          '0%':{
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateY("0px")'
          }
        },
        Animation:{
          enter: 'enterAnimation 1s ease-out forwards'
        }
      }
    },
  },
  plugins: [],
}