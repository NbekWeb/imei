/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "780px",
         md: "992px",
         lg: "1230px",
         xl: "1350px",
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
            inter: ["inter-400"],
            "inter-500": ["inter-500"],
            "inter-600": ["inter-600"],
            "inter-700": ["inter-700"],
            "inter-800": ["inter-800"],
            "inter-400": ["inter-400"],
            "inter-500": ["inter-500"],
            "inter-600": ["inter-600"],
            "inter-700": ["inter-700"],
         },
      },
   },
};
