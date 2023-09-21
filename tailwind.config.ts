import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne: "Syne",
        Krona: "Krona",
        FahkwangRegular: "FahkwangRegular",
        FahkwangMedium: "FahkwangMedium",
        FahkwangBoldItalic: "FahkwangBoldItalic",
        FahkwangSemiBoldItalic: "FahkwangSemiBoldItalic",
        PoppinsBlack: "PoppinsBlack",
        PoppinsRegular: "PoppinsRegular",
        PoppinsSemiBold: "PoppinsSemiBold",
        RubikMonoOne: "RubikMonoOne",
      },
      colors: {
        themeRed: "#FF1B1B",
        themePurple: "#C082FF",
        themeYellow: "#EDF738",
        themeBlue: "#3E6DD9",
        themeOrange: "#FF8A00",
        themeGray: "#E8E8E8",
      },
    },
    keyframes: {
      arrowMove: {
        "0%, 9%": { transform: "translateY(0px)", opacity: '1' },
        "10%, 19%": { transform: "translateY(0px)", opacity: '0' },

        "20%, 29%": { transform: "translateY(20px)", opacity: '1' },
        "30%, 39%": { transform: "translateY(20px)", opacity: '0' },

        "40%, 49%": { transform: "translateY(40px)", opacity: '1' },
        "50%, 59%": { transform: "translateY(40px)", opacity: '0' },

        // "60%, 69%": { transform: "translateY(60px)", opacity: '1' },
        "70%, 79%": { transform: "translateY(60px)", opacity: '0' },

        // "80%, 89%": { transform: "translateY(80px)", opacity: 1 },
        "90%, 99%": { transform: "translateY(80px)", opacity: '0' },

        "100%": { transform: "translateY(0px)", opacity: '1' },
      },
    },
    animation: {
      arrowMove: "arrowMove 2000ms linear infinite",
    },
  },
  plugins: [],
};
export default config;
