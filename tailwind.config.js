/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'deep-gray': '#262626',
      'light-gray': '#f5f5f5',
      'cream': '#f3eddf',
      'neon': '#c5f252',
      'soft-purple': '#a998dd',
      'overlay': '#00000045'
    },
    fontFamily: {
      bebasNeue: ['Bebas Neue', 'sans-serif'],
      moiraiOne: ['Moirai One', 'system-ui'],
      paytoneOne: ['Paytone One', 'sans-serif'],
      mono: ['Monospace'],
      indie: ['Indie Flower', 'cursive']
    },
  },
  plugins: [],
}

