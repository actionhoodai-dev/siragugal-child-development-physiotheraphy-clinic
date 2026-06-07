import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1B2A8A",
        secondary: "#F5A800",
        accent: "#00AACC",
        "bg-light": "#FAFAF8",
        "bg-dark": "#0D1B4B",
        "text-dark": "#1A1A2E",
        "text-mid": "#4A4A6A",
        success: "#28A745",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        tamil: ["var(--font-noto-tamil)", "sans-serif"],
      },
      boxShadow: {
        solid: "4px 4px 0px 0px #1A1A2E",
        "solid-lg": "8px 8px 0px 0px #1A1A2E",
        "solid-secondary": "4px 4px 0px 0px #F5A800",
        "solid-primary": "4px 4px 0px 0px #1B2A8A",
      },
    },
  },
  plugins: [],
};
export default config;
