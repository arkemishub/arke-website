module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      black: "#0A0B12",
      primary: "#78E7B0",
      secondary: "#797D94",
      green: "#78E7C5",
      blue: "#67BEFF",
      rose: "#EFAEFF",
      // ...
    },
    keyframes: {
      primary: {
        "0%": {
          left: "0%",
        },
        "100%": {
          left: "-100%",
        },
      },
    },
    animation: {
      primary: "primary 20s linear infinite",
    },
  },
  plugins: [],
};
