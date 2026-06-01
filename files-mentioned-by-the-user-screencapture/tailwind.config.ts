import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F10",
        card: "#171717",
        paper: "#F5F5F5",
        muted: "#A1A1AA",
        accent: "#3B82F6"
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        clean: "0 24px 70px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
