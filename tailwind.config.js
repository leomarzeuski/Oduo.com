module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#0762D9",
      secondary: "#043F8D",
      white: "#FFFFFF",
      black: "#292D33",
      gray: "#9497A1",
      background: "#F1F6FA",
      red: "#F0431B",
      green: "#1ABA14",
      yellow: "#EFCE4A",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      animation: {
        upper: "upper 2.5s ease infinite",
        upperSlow: "upper 3s ease infinite",
      },
      keyframes: {
        upper: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
    },
  },
  plugins: [],
};
