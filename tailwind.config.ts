import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px rgba(72, 187, 120, 0.8)',
        intenseGlow: '0 0 15px rgba(72, 187, 120, 1), 0 0 25px rgba(72, 187, 120, 1)', // stronger glow
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(72, 187, 120, 0.8)' },
          '50%': { boxShadow: '0 0 20px rgba(72, 187, 120, 1)' },
        },
      },
      animation: {
        glow: 'pulseGlow 2s infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glowGreen: '#48bb78', // adds a reference color if needed
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};

export default config;
