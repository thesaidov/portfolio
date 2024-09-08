/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        view: "view 3s linear 2s 1 forwards",
        line: "line 2s linear 4s 1 forwards",
        line2:"line2 2s linear 6s 1 forwards",
        line3:"line3 2s linear 6s 1 forwards",
        line4:"line4 2s linear 6s 1 forwards",
        line5:"line5 2s linear 6s 1 forwards",
        line6:"line6 2s linear 6s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        view: {
          "0%": {
            opacity: 0,
            transform: "translate(-0%, 20%)",
          },
          "50%": {
            opacity: 0.5,
            transform: "translate(-0%, 10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-0%,0%)",
          },
        },
        line: {
          "from":{
            scale: "0"
          },
          "to":{
            scale: "1 1",
            opacity: "1"
          }
        },
        line2: {
          "to":{
            width: "60%"
          }
        },
        line3: {
          "to":{
            width: "35%"
          }
        },
        line4: {
          "to":{
            width: "100%"
          }
        },
        line5: {
          "to":{
            width: "55%"
          }
        },
        line6: {
          "to":{
            width: "90%"
          }
        },
      },
    },
  },
  plugins: [],
}