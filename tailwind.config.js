module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            'limited-bounce': 'bounce 2s ease-in-out 5'
        }
    },
  },
  plugins: [],
}
