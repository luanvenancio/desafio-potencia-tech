/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      }
    },
    colors:{
      purple: "#d81d99",
      blue: "#2E7BB4",
      primary: "#6F92BB",
      secondary: "#D9E6F6",
      white: "#FFFFFF",
      background: "#D9E6F6",
      grey1: "#333333",
      grey3: "#999999",
      gray4: "#F4F4F4"
    }
  },
  plugins: [],
}

