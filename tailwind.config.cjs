module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}',
      './public/**/*.html'
    ],
    theme: {
      extend: {
        colors: {
          lemon: '#FFFACD',
          candy: '#FFC0CB',
          softwhite: '#FDFDFD'
        },
        backdropBlur: {
          xs: '2px'
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif']
        }
      },
    },
    plugins: [],
  };
  