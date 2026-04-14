/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#f6efe9',
        'retro-btn': '#ecdac5',
        'retro-dark': '#111',
      },
      fontFamily: {
        'galmuri': ['galmuri11', 'sans-serif'],
      },
      boxShadow: {
        'retro-btn': 'inset 1px 1px 0px rgba(255,255,255,0.7), inset -1px -1px 0px rgba(0,0,0,0.2)',
        'retro-btn-active': 'inset 2px 2px 0px rgba(0,0,0,0.3)',
        'retro-scrollbar': 'inset 1px 1px 0px #fff, inset -1px -1px 0px #ba9e82',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-retro::-webkit-scrollbar': {
          width: '16px',
        },
        '.scrollbar-retro::-webkit-scrollbar-track': {
          background: 'white',
          borderLeft: '1px solid #000',
        },
        '.scrollbar-retro::-webkit-scrollbar-thumb': {
          background: '#eeddc9',
          border: '1px solid #000',
          borderRadius: '2px',
          boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #ba9e82',
        },
      });
    }
  ],
}
