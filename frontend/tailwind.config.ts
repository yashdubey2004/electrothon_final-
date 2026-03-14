import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#fdfdff",
        "on-background": "#0f172a",
        "surface": "#ffffff",
        "on-surface": "#0f172a",
        "surface-variant": "#f1f5f9",
        "on-surface-variant": "#475569",
        "outline": "#94a3b8",
        "outline-variant": "#e2e8f0",
        "primary": "#6366f1", // Indigo from DESIGN_SYSTEM_1
        "on-primary": "#ffffff",
        "primary-container": "#e0e7ff",
        "on-primary-container": "#3730a3",
        "secondary": "#0ea5e9", // Sky blue for accent
        "on-secondary": "#ffffff",
        "secondary-container": "#e0f2fe",
        "on-secondary-container": "#075985",
        "tertiary": "#8b5cf6", // Violet for tertiary highlights
        "on-tertiary": "#ffffff",
        "surface-container-low": "#f8fafc",
        "surface-container": "#f1f5f9",
        "surface-container-high": "#e2e8f0",
        "surface-container-highest": "#cbd5e1"
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;
