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
  },
  plugins: [],
};
export default config;
