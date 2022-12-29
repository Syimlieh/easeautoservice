/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10rem",
    },
    extend: {
      fontFamily: {
        outfit: "Outfit",
        poppins: "Poppins",
        "hind-kochi": "'Hind Kochi'",
        inter: "Inter",
        alike: "Alike",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      indigo: {
        100: "#1180e6",
        200: "#4f46e5",
        300: "#4d47c3",
        400: "rgba(79, 70, 229, 0)",
      },
      gray: {
        100: "#eff0f2",
        200: "#b5b5b5",
        300: "#838383",
        400: "#6a6464",
        500: "#4d5959",
        600: "#5f4c4c",
        700: "#303030",
        800: "#043133",
        900: "rgba(217, 217, 217, 0)",
        1000: "rgba(255, 255, 255, 0)",
        1100: "rgba(255, 233, 233, 0.45)",
      },
      brown: "#ed0541",
      red: "#ff6b00",
    },
    fontSize: {
      "3xs": "1.5rem",
      "2xs": "1.6rem",
      xs: "2rem",
      sm: "2.3rem",
      base: "2.4rem",
      lg: "2.8rem",
      xl: "3rem",
      "2xl": "3.2rem",
      "3xl": "4.8rem",
      "4xl": "5rem",
    },
  },
  corePlugins: { preflight: false },
};
