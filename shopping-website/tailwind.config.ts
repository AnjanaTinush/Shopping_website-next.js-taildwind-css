import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center :true,
        padding : "15px",
      },
      colors :{
        blue : "#3437eb",
        backish :"#1b1b1b",
      }
    },
  },
  plugins: [],
};
export default config;
