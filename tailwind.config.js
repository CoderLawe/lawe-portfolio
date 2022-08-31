const  defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        blackishBg:"#1d1b19",
        headerYellow:"#967651",
        paragraphGray:"#888888"
      },
      fontFamily:{
        "Cormorant":["Cormorant Upright",...defaultTheme.fontFamily.sans]
      },
      backgroundImage: theme =>({
        loaderBg:"url('https://cdn.discordapp.com/attachments/817048198022430761/1010908565722116097/Screen_Shot_2022-08-21_at_3.41.44_PM.png')"
    }),
    },
  },
  plugins: [],
}
