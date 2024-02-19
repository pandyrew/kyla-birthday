import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
      '6.5xl': '4.1rem',
      },
      padding: {
        '1.7': '0.45rem',
      },
      borderWidth: {
        '3': '3px',
        
      },
      outlineWidth: {
        '3': '2.5px',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ander: ["var(--font-ander)"],
        grand: ["var(--font-grand)"],
      },
    },
  },
  plugins: [],
};
export default config;
