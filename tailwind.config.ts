import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
          light: "#4ade80",
          muted: "rgba(34,197,94,0.15)",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(34,197,94,0.5)",
        intenseGlow: "0 0 20px rgba(34,197,94,0.8), 0 0 40px rgba(34,197,94,0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        card: "0 20px 60px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.3)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(34,197,94,0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(34,197,94,0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spin_slow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
      animation: {
        glow: "pulseGlow 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin_slow 12s linear infinite",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
