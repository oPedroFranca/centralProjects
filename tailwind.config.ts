import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          "gray-200": "#dbdbdb",
          "gray-300": "#a9a9a9",
          "gray-400": "#6d6d6d",
          "gray-500": "#3e3e3e",
          "gray-600": "#212121",
          "gray-700": "#1C1C1F",
          "gray-800": "#161618",
          "gray-900": "#101012",
        },

        secondary: {
          "purple-100": "#D6D6F6",
          "purple-200": "#B0B0F0",
          "purple-300": "#8989DE",
          "purple-400": "#6E6EC9",
          "purple-500": "#5454B4",
          "purple-600": "#3A3A8F",
          "purple-700": "#2A2A6A",
          "purple-800": "#19194D",
        },
      },

      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  }, 

  plugins: [tailwindcssAnimate],
} satisfies Config;
