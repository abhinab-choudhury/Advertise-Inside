/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '360px',
      // => @media (min-width: 412px) { ... }

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1200px'
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
}