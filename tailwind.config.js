import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4AF3",
        secondary: "#F5F7FE",
        light100: "#F5F7FE",
        light200: "#A0B2FB",
        light300: "#A3A3A3",
        darkBlue: "#E7ECFE",
        light400: "#ffffff",
        dark100: "#000000",
        dark200: "#0d1c5a",
        inputblue: "#1F4AF434",
        headerText: "#707070",
      },
      screens: {
        // SH
        laptop: "1500px",
        tab: "850px",
        xtab: "1050px",
        maxtab:"1200px"
      },
      transitionDuration: {
        2000: "2000ms", // You can adjust the duration as needed
        3000: "3000ms",
        4000: "4000ms",
      },
      fontSize: {
        x2s: "15px",
        xs: "20px",
        sm: "25px",
        m2d: "30px",
        md: "40px",
        lg: "60px",
        // SH
        mf: "18px",
        lf: "40px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
