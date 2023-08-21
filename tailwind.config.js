/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      Inter:'Inter'
    },
    extend: {
      colors:{
        Offwhite: 'hsl(36, 100%, 99%)',
        Grayishblue: 'hsl(233, 8%, 79%)',
        Darkgrayishblue: 'hsl(236, 13%, 42%)',
        Verydarkblue: 'hsl(240, 100%, 5%)',
        Softorange: 'hsl(35, 77%, 62%)',
        Softred: 'hsl(5, 85%, 63%)',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

