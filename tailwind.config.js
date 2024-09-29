/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 -4px 3px -1px rgba(0, 0, 0, 0.3), 0 -2px 2px -1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

