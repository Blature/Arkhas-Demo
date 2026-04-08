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
        brand: {
          navy: "#001f3f",
          darkNavy: "#00142b",
          gold: "#D4AF37",
          cyan: "#00E5FF",
        },
        background: "#080b12",
        surface: "#101625",
        surfaceLight: "#1a233a",
        textDefault: "#e2e8f0",
        textMuted: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(to right, #00142b, #001f3f)',
      }
    },
  },
  plugins: [],
};
export default config;
