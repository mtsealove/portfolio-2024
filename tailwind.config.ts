/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        3: '3',
        4: '4',
      },
    },
    fontFamily: {
      pretendard: ['Pretendard'],
    },
  },
  plugins: [],
};
