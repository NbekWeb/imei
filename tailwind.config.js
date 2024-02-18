/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "780px",
      md: "992px",
      lg: "1100px",
      xl: "1250px",
    },
    colors: {
      primary: "#3A499C",
      "primary-200": "#CED1E6",
      success: "#02676C",
      white: "#ffffff",
      gray: "#999",
      "gray-900": "#8A8A8A",
      "gray-800": "#4C4C4C",
      "gray-600": "#797979",
      danger: "#D94540",
      black: "#222",
    },
    extend: {
      fontFamily: {
        Manrope: ["Manrope-400"],
        "Manrope-500": ["Manrope-500"],
        "Manrope-600": ["Manrope-600"],
        "Manrope-700": ["Manrope-700"],
        "Manrope-800": ["Manrope-800"],
      },
    },
  },
};
