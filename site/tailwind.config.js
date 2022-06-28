/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
       bannerHome: 'url(./src/assets/banner.jpg)'
      },
      backgroundColor:{
        navBanner: 'rgba(255,255,255, 0.7)'
      },
    },
  },
  plugins: [],
}
