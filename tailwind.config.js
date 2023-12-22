/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark-primary'  : '#010409',
        'dark-secondary' : '#161B22',
        'light-primary' : '#F4F5F8',
        'light-secondary' : '#ffff',
        'dark-text' : '#ebebeb',
        'text-2'  : '#8D8D8D',
        'special' : '#4a4a4a',
        'special-2' :'#e6e7eb',
        'shadow-1' :'#0000001A'
      }
    },

  },
  darkMode : 'class',
  plugins: [],
}

