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
      },
      backgroundColor: {
        "light-theme": "#FFFFFF",
        "dark-theme": "#090A1C",
      },
      colors: {
        "dark-purplish-blue": "#030528",
        "light-blue": "#1A25F0",
        "dark-blue": "#111AB9",
        "gradient-blue": "linear-gradient(180deg, #1621F5 0%, #0B0F58 100%)",
        "dark-gray": "#1119AE0C",
        gray: "#EAE3E3",
        "light-gray": "#D8D8E2",
        "footer-gradient":
          "linear-gradient(180deg, #EFF0F2 0%, #868898 35%, #2C2D32 100%)",
        "dark-footer-gradient":
          "linear-gradient(180deg, #322F2F 29%, #171A2F 35%, #02040F 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
