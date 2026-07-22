/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E82BC',
          hover: '#16699B',
          light: '#449BD3',
          dark: '#13537C',
        },
        navy: {
          DEFAULT: '#0B2545',
          light: '#133663',
          dark: '#06162B',
        },
        ice: {
          DEFAULT: '#F0F7FF',
          dark: '#DCEBFA',
        },
        secondary: '#1E82BC', // Replaced orange with Bionic Blue
        dark: '#0B2545',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
