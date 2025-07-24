import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          "gray-300": "#a9a9a9",
          "gray-400": "#6d6d6d",
          "gray-500": "#3e3e3e",
          "gray-600": "#212121",
          "gray-700": "#1C1C1F",
          "gray-800": "#161618",
        },

        secondary: {
          "purple-100": "#E0AAFF",
          "purple-200": "#C77DFF",
          "purple-300": "#9D4EDD",
          "purple-400": "#7B2CBF",
          "purple-500": "#5A189A",
          "purple-600": "#3C096C",
          "purple-700": "#240046",
          "purple-800": "#10002B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
