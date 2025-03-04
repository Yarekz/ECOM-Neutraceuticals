/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f9faf5',
          100: '#f1f4e5',
          200: '#e3e9cc',
          300: '#d0d9ad',
          400: '#b8c585',
          500: '#a3b266',
          600: '#859349',
          700: '#68753a',
          800: '#4d5a2e',
          900: '#3c4626',
        },
      },
    },
  },
  plugins: [],
};