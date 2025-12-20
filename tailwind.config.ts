import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Colors from WAI Soft palette
        primary: {
          DEFAULT: "#7A9AC7",
          50: "#F0F4F9",
          100: "#E1E9F3",
          200: "#C3D3E7",
          300: "#A5BDDB",
          400: "#7A9AC7",
          500: "#5A7AB0",
          600: "#4A6A9A",
          700: "#3A5A84",
          800: "#2A4A6E",
          900: "#1A3A58",
        },
        // Cyan/Aqua - Light blue accent
        cyan: {
          DEFAULT: "#8DE4F2",
          50: "#F0FBFD",
          100: "#E1F7FB",
          200: "#C3EFF7",
          300: "#A5E7F3",
          400: "#8DE4F2",
          500: "#6DD8EA",
          600: "#4DCCE2",
          700: "#2DC0DA",
          800: "#1DA8C0",
          900: "#0D8FA6",
        },
        // Navy
        navy: {
          DEFAULT: "#4A5578",
          50: "#F5F6F8",
          100: "#EBEDF1",
          200: "#D7DBE3",
          300: "#C3C9D5",
          400: "#9BA5B9",
          500: "#73819D",
          600: "#4A5578",
          700: "#3A4560",
          800: "#2A3548",
          900: "#1A2530",
        },
        // Burgundy
        burgundy: {
          DEFAULT: "#2D1A24",
          50: "#F8F5F6",
          100: "#F1EBED",
          200: "#E3D7DB",
          300: "#D5C3C9",
          400: "#B99BA5",
          500: "#9D7381",
          600: "#814B5D",
          700: "#5A3341",
          800: "#3D2330",
          900: "#2D1A24",
        },
        // Silver/Gray
        silver: {
          DEFAULT: "#C8CED2",
          50: "#FAFBFB",
          100: "#F5F6F7",
          200: "#EBEDEF",
          300: "#E1E4E7",
          400: "#C8CED2",
          500: "#AFB8BD",
          600: "#96A2A8",
          700: "#7D8C93",
          800: "#64767E",
          900: "#4B6069",
        },
        // Dark theme colors
        dark: {
          DEFAULT: "#0A0A0F",
          50: "#1A1A25",
          100: "#15151F",
          200: "#101019",
          300: "#0D0D14",
          400: "#0A0A0F",
          500: "#07070A",
          600: "#040405",
          700: "#010101",
          800: "#000000",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7A9AC7 0%, #4A5578 100%)",
        "gradient-cyan": "linear-gradient(135deg, #8DE4F2 0%, #7A9AC7 100%)",
        "gradient-ocean": "linear-gradient(135deg, #8DE4F2 0%, #4A5578 100%)",
        "gradient-dark": "linear-gradient(135deg, #1A1A25 0%, #0A0A0F 100%)",
        "gradient-burgundy": "linear-gradient(135deg, #2D1A24 0%, #4A5578 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(122, 154, 199, 0.3), 0 0 40px rgba(74, 85, 120, 0.1)",
        "glow-lg": "0 0 40px rgba(122, 154, 199, 0.5), 0 0 80px rgba(74, 85, 120, 0.2)",
        "glow-cyan": "0 0 20px rgba(141, 228, 242, 0.4), 0 0 40px rgba(141, 228, 242, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        blob: "blob 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 60% 70% 40%" },
          "75%": { borderRadius: "60% 40% 60% 30% / 70% 30% 50% 60%" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};

export default config;
