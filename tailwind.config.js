/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03346E",
        secondary: "#6EACDA",
        accent: "#021526",
        light: "#ffffff",
        gold: "#F3C623"
    },
    fontFamily: {
        arvo: ["Arvo", "san-serif"],
        hind: ["Hind", "san-serif"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
  plugins: [],
    } 
  }
}