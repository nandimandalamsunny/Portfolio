module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#1C1D24',
        tertiary: '#2F2F82 ',
        accent: {
          DEFAULT: '#dc2626',
          hover: '#925a2b',
        },
        paragraph: '#000000',
      },
    },
  },
  plugins: [],
};
