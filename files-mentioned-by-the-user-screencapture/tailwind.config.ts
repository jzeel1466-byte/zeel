import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F5F1E8",
        card: "#EDE5D8",
        paper: "#1A1A1A",
        muted: "#5A5248",
        accent: "#C9A876"
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        clean: "0 24px 70px rgba(26,26,26,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
