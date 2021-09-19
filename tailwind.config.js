module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        "dark-base": "#cdd9e5",
      },
      backgroundColor: {
        "dark-base": "#22272E",
        "dark-bandle": "#2D333B",
      },
      backgroundImage: {
        "light-image": "url('/background-light.png')",
        "dark-image": "url('/background-dark.png')",
      },
      backgroundPosition: {
        "top-right": "top 110px right",
      },
      boxShadow: {
        "dark-lg":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".glass-container-light": {
          borderRadius: "15px",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "rgba(31, 38, 135, 0.3) 0 6px 20px",
          border: "2px rgba(255, 255, 255, 0.2) solid",
          borderBottom: "2px rgba(40, 40, 40, 0.25) solid",
          borderRight: "2px rgba(40, 40, 40, 0.25) solid",
        },
      };
      addUtilities(newUtilities);
    },
    ({ addUtilities }) => {
      const newUtilities = {
        ".glass-container-dark": {
          borderRadius: "15px",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "rgba(130, 130, 180, 0.3) 0 6px 20px",
          border: "2px rgba(255, 255, 255, 0.2) solid",
          borderBottom: "2px rgba(40, 40, 40, 0.25) solid",
          borderRight: "2px rgba(40, 40, 40, 0.25) solid",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
