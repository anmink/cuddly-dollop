module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  daisyui: {
    utils: true,
    themes: [
      {
        mytheme: {
          primary: '#BF5349',

          secondary: '#146c58',

          accent: '#D59B6A',

          neutral: '#333333',

          'base-100': '#f1f1f1',

          info: '#42ADBB',

          success: '#499380',

          warning: '#E97F14',

          error: '#DF1A2F',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
