/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        flip: "-1",
      },
      colors: {
        "primary-purple": "#6A6AE2",
        "primary-yellow": "#F0BA41",
        "off-white": "#F4F4F4",
      },
      fontFamily: {
        firaCode: ["Fira code", "sans-serif"],
        sans: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
