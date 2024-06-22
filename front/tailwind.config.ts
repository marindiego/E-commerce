import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        'background-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'background-move-hover': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'background-move-active': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'background-move': 'background-move 4s ease infinite',
        'background-move-hover': 'background-move-hover 4s ease infinite',
        'background-move-active': 'background-move-active 4s ease infinite',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#415A77",
        secondary: "#778DA9",
        white: "#F2F2F2",
        darkGray: "#6D6D6D",
        accentColor: "#72C034",
        accentColor2: "#FFD700",
        backgroundColor: "#1B263B",
        backgroundColor2: "#163455",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-gradient": "linear-gradient(155deg, rgba(255,255,255,1) 61%, rgba(190,220,244,1) 61%, rgba(150,199,237,1) 100%);",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
};
export default config;
