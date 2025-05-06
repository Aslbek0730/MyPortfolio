export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e1ebff',
          200: '#c3d7fe',
          300: '#94b8fd',
          400: '#608ffb',
          500: '#3b69f9',
          600: '#2948ef',
          700: '#2335db',
          800: '#212eb2',
          900: '#222d8b',
          950: '#171c54',
        },
        accent: {
          50: '#eefff7',
          100: '#d7ffee',
          200: '#b2ffdd',
          300: '#74ffc4',
          400: '#31fa9f',
          500: '#09e57f',
          600: '#00bc63',
          700: '#009453',
          800: '#007345',
          900: '#005f3b',
          950: '#00361f',
        },
        dark: {
          50: '#f6f6f9',
          100: '#ededf1',
          200: '#d7d7e1',
          300: '#b5b4c5',
          400: '#8d8ba4',
          500: '#6f6c8a',
          600: '#5a5772',
          700: '#4a485d',
          800: '#403e4f',
          900: '#373544',
          950: '#171523',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(9, 229, 127, 0.3)',
        'glow-lg': '0 0 25px 10px rgba(9, 229, 127, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}