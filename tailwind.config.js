/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        mist: "#ecf4ff",
        cyan: "#57e6ff",
        lime: "#d9ff6b",
        coral: "#ff8a65",
        slate: "#8aa0b8"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(87, 230, 255, 0.18)"
      },
      fontFamily: {
        sans: ["Trebuchet MS", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};
