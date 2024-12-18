import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e5f2ff", // Bijvoorbeeld een lichtere kleur
          DEFAULT: "#f4f4f4", // Standaardkleur (gebruik 'DEFAULT' als basiskleur)
          dark: "#eef7ff", // Donkere variant
        },
        secondary: "#3399ff", // Een enkele kleur zonder tinten
      },
    },
  },
  plugins: [],
} satisfies Config;
