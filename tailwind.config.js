/** @type {import('tailwindcss').Config} */

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        name: ["Montserrat", "sans-serif"],
      },
      colors: {
        "main-50": "#EED8FF",
        "main-100": "#E8CBFF",
        "main-500": "#BC67FF",
        "main-550": "#9663BD",
        "main-600": "#562E76",
        "main-900": "#191921",
        "main-950": "#161418",
      },
    },
  },
  plugins: [require("tailwind-fluid-typography")],
};
