/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050807",
        surface: "#0b0f0d",
        panel: "#0f1512",
        border: "#1c2621",
        brand: {
          DEFAULT: "#34d399",
          dark: "#059669",
          light: "#10b981",
        },
        mint: "#6ee7b7",
        graphite: {
          900: "#10151a",
          800: "#1a2129",
          700: "#262f38",
          600: "#3a4650",
          400: "#6b7a84",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
