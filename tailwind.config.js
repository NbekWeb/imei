/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "760px",
      md: "992px",
      lg: "1230px",
      xl: "1350px",
    },

    colors: {
      primary: "#3A499C",
      "primary-800": "#1A2746",
      "primary-600": "#203352",
      "primary-200": "#CED1E6",
      success: "#02676C",
      white: "#ffffff",
      gray: "#999",
      "gray-900": "#8A8A8A",
      "gray-800": "#4C4C4C",
      "gray-600": "#797979",
      danger: "#D94540",
      black: "#06112E",
    },
    extend: {
      fontFamily: {
        inter: ["inter-400"],
        "inter-500": ["inter-500"],
        "inter-600": ["inter-600"],
        "inter-700": ["inter-700"],
        "inter-800": ["inter-800"],
      },
      spacing: {
        13: "52px",
        15: "60px",
      },
      // fontSize: {
      //    'xl': '1rem', // Default font size
      //  },
    },
  },
  //     plugins: [
  //     function ({ addComponents, theme }) {
  //       addComponents({
  //         '@media (min-width: 2000px)': {
  //           '.text-xl-responsive': {
  //             fontSize: '30px',
  //           },
  //         },
  //       });
  //     },
  //   ],
};
