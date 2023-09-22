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
        "0%, 9%": { transform: "translateY(0px)", opacity: "1" },
        "10%, 19%": { transform: "translateY(0px)", opacity: "0" },

        "20%, 29%": { transform: "translateY(20px)", opacity: "1" },
        "30%, 39%": { transform: "translateY(20px)", opacity: "0" },

        "40%, 49%": { transform: "translateY(40px)", opacity: "1" },
        "50%, 59%": { transform: "translateY(40px)", opacity: "0" },

        // "60%, 69%": { transform: "translateY(60px)", opacity: '1' },
        "70%, 79%": { transform: "translateY(60px)", opacity: "0" },

        // "80%, 89%": { transform: "translateY(80px)", opacity: 1 },
        "90%, 99%": { transform: "translateY(80px)", opacity: "0" },

        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      rotateAndTranslateBox: {
        "0%": {
          transform: "rotate(0)",
          transformOrigin: "bottom left",
        },
        "100%": {
          transform: "rotate(-90deg)",
          transformOrigin: "bottom left",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      flicker: {
        "0%": {
          opacity: "1",
          transform: "rotate(0deg)",
        },
        "50%": {
          opacity: "1",
          transform: "rotate(180deg)",
        },
        "100%": {
          opacity: "0",
          transform: "rotate(360deg)",
        },
      },
      drop1: {
        "0%": {
          transform: "translateY(-200px) rotate(-90deg)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
      drop2: {
        "0%": {
          transform: "translateY(-200px) rotate(90deg)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
      rollInFromRight: {
        "0%": {
          transform: "translateX(800px) rotate(90deg)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      }
    },
    animation: {
      arrowMove: "arrowMove 2000ms linear infinite",
      rotateAndTranslateBox: "rotateAndTranslateBox 1000ms ease-in",
      spin: "spin 2000ms linear infinite",
      flicker1: "flicker 3000ms linear infinite",
      flicker2: "flicker 3100ms linear infinite",
      flicker3: "flicker 3200ms linear infinite",
      flicker4: "flicker 3300ms linear infinite",
      drop1: "drop1 1000ms linear",
      drop2: "drop2 1000ms linear",
      rollInFromRight: "rollInFromRight 1500ms linear",

    },
  },
  plugins: [],
};
export default config;
