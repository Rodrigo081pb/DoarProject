module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-blur-bottom': {
          '0%': {
            transform: 'translateY(100px) scaleY(2.5) scaleX(0.2)',
            filter: 'blur(40px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'slide-in-blur-bottom': 'slide-in-blur-bottom 1s cubic-bezier(0.23, 1, 0.32, 1) both',
      },
    },
  },
  plugins: [],
}