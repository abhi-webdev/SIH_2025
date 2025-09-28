/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This tells Tailwind to scan all JavaScript/TypeScript files in the src folder
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#172B4D', // Your main dark blue
        'accent-green': '#1abc9c', // For successful/active states (like "Pay")
        'dark-grey': '#333333',
        'light-bg': '#F7F7F7', // The light gray background color
        'status-red': '#E74C3C', // For cancelled/failed/sale indicators
        'status-yellow': '#F39C12', // For pending/warning indicators
        'search-bg': '#FFFFFF',
      },
      // Set default font
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
