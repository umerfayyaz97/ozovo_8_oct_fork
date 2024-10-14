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
        "customYellow": "#FAAD1D",
        "slate": "#FFF4DF",
        "graish": "#333333",
        "faq": "#3B3B3B",
        "cardgray": "#545454",
        "qrb": "#FFBD7A",
        "qrs": "#FFE25A"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add DM Sans as the default sans-serif font
      },
    },
  },
  plugins: [],
};

export default config;
