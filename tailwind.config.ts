import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F27704",
        customGray: "rgba(137, 132, 132, 0.78)", // Custom gray with 78% opacity
        glasscolor: "rgba(255, 255, 255, 0.1)", // Light glassy color
        backdrop: "rgba(0, 0, 0, 0.4)", // Dark backdrop color
        secondary: "rgba(156 ,163 ,175, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
