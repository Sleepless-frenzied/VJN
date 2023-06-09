/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        'light': '#f1f2f4',
        'lightNav':"#fdfdfe",
        'lightTxt':'#000000',
        'lightButton':'#868686',
        'lightModule':'#dadada',
        'lightInfo':'#c9c9c9',
        'lightDivi':'#b0b1b4',
        'lightHR':'#413b3b',



        'dark':'#282a2e',
        'darkNav':"#070707",
        'darkTxt':'#ffffff',
        'darkButton':'#1f2023',
        'darkModule':'#313338',
        'darkInfo':'#494c54',
        'darkDivi':'#2c59e8',
        'darkHR':'#1677ff'

      },
    },
  },
  plugins: [],
}