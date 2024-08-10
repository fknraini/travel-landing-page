module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vista-white': '#FAF9F5',
        'dark-aquaman': '#0B7373',
        'dark-teal': '#004040',
        'tan': '#D6B66B',
      },
      fontFamily: {
        'the-signature': ['Thesignature', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
      },
      scrollMargin: {
        'top-20': '20px',
      },
    },
  },
  plugins: [],
};