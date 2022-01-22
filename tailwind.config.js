module.exports = {
  darkMode: 'class',
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fade 1s ease-in-out',
      },
      keyframes: {
        
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      fontFamily: {
        'BlenderPro': ['BlenderPro', 'display'],
        'Outfit': ['Outfit', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
