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
        "base" :"rgba(156 ,163 ,175, 0.5)",
      },
    },
    colors: {
      "primary": "#F27705"
    }
  },
  plugins: [],
};
export default config;
