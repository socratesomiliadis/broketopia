module.exports = {
  darkMode: 'class',
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fade 1s ease-in-out',
        w1: 'w1Anim 1.5s infinite',
        w2: 'w2Anim 1.5s infinite',
      },
      keyframes: {
        w1Anim: {
          '0%': { opacity: '0' },
          '1%': { opacity: '1' },
          '49%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        w2Anim: {
          '50%': { opacity: '0' },
          '51%': { opacity: '1' },
          '99%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
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
