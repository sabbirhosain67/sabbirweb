module.exports = {
  content: [
    './output/**/*.{html,js}',
    './css/**/*.{html,js}',
    './js/**/*.{html,js}',
    'index.html',
  ],

  theme: {

    screens: {
      'xs': {'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1219px'},
      'xl': {'min': '1220px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },

    container: {
      center: true,
      padding: '15px',
    },

    extend: {

      colors: {
        transparent: 'transparent',
        primary: '#EE5F38',
        secendary: '#999999',
        white: '#ffffff',
        black: '#000000',
        gray: '#565656'
      },

      boxShadow: {
        '3xl': '0 10px 50px 5px rgb(0 0 0 / 0.06)',
        '4xl': '0 10px 50px 15px rgb(0 0 0 / 0.10)',
        '5xl': '0 5px 15px 0px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
