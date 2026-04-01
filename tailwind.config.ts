import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF7",
        darkBrown: "#2A1A14",
        softGold: "#C5A880",
        lightGold: "#E6D5B8",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(42, 26, 20, 0.15)",
      },
    },
  },
  plugins: [],
}

export default config