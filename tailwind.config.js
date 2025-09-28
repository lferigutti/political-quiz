/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
    },
    colors: {
      background: "#ffffff",
      primary: "#a9f27d",
      secondary: "#51CFA2",
      tertiary: "#A5E3CE",
      neutral: "#1E063A",
      backgroundSecondary: "#F3F6FE",
      colorText: "#1E063A",
      muted: "#6B7280",
      white: "#ffffff",
    },
  },
  plugins: [],
};
