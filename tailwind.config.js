module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        resume: {
          10: '#F3F8FF',
          50: '#E7EEFA',
          100: '#C7D6E4',
          200: '#A8B9CC',
          300: '#889DB3',
          400: '#7188A1',
          500: '#59748F',
          600: '#4C667E',
          700: '#3C5268',
          800: '#2E4052',
          900: '#1C2C3A',
        },
      },
      colors: {
        bgbase: "#fbf8f6",
        level1: "#f3ebe5",
        level4: "#09050e",
        color1: "#f3c5c5",
        color2: "#fae0c1",
        color3: "#d5d2fe",
        color4: "#bff0db",
      },
      borderRadius: {
        md: '4px',
      },
      screens: {
        'max-md': { max: '767px' },
      },
      fontFamily: {
        heading: ['font1', 'sans'],
      },
    },
  },
  plugins: [],
};
