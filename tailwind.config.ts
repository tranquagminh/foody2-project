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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        greatVibes: ['"Great Vibes"', "cursive"],
      },
      backgroundImage: {
        "icon-pattern": "url('../public/images/backgrounds/bg-icon.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
