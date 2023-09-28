/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue'],
  theme: {
    colors: {
      primary: '#fc8019',
      secondary: '#3d4152',
      tertiary: '#e2e2e7',
      danger: '#FF0000',
      white: '#FFFFFF',
      icon: '#505050',
      blue: '#1A61DC',
      card: {
        1: '#02060cbf',
        2: '#02070d',
        3: '#E1E1E1',
      },
      placeholder: '#A1A1A1',
    },
    container: {
      screens: {
        '2xl': '1421px',
      },
    },
    extend: {},
    fontFamily: {
      BasisGrotesqueProBlack: ['BasisGrotesqueProBlack'],
      BasisGrotesqueProBold: ['BasisGrotesqueProBold'],
      BasisGrotesqueProMedium: ['BasisGrotesqueProMedium'],
      BasisGrotesqueProRegular: ['BasisGrotesqueProRegular'],
      BasisGrotesqueProLight: ['BasisGrotesqueProLight'],
    },
    // fontSize: {
    //   '2xs': '.75rem',
    //   'xs': '.813rem',
    //   'sm': '.875rem',
    //   'tiny': '.938rem',
    //   'base': '1rem',
    //   'lg': '1.125rem',
    //   'xl': '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    //   '7xl': '5rem',
    // }
  },
  plugins: [],
};
