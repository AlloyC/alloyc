import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(../../public/assets/images/hero-bg.svg)",
        main: "url(../../public/assets/images/main-bg.svg)",
        "light-gray-gradient": "linear-gradient(180deg, #C8D4D60C, #4F545418)",
        "dark-footer-gradient":
          "linear-gradient(90deg, #322F2F 29%, #171A2F 35%, #02040F 100%)",
        "gradient-blue": "linear-gradient(90deg, #1621F5 0%, #0B0F58 100%)",
        "footer-gradient":
          "linear-gradient(180deg, #9B9DAA 0%, #868898 15%, #2C2D32 100%)",
      },
      backgroundColor: {
        "light-theme": "#FFFFFF",
        "dark-theme": "#090A1C",
      },
      colors: {
        "dark-purplish-blue": "#030528",
        "light-blue": "#1A25F0",
        "dark-blue": "#111AB9",
        "dark-gray": "#1119AE",
        gray: "#EAE3E3",
        "light-gray": "#D8D8E2",
      },
    },
  },
  plugins: [],
} satisfies Config;
