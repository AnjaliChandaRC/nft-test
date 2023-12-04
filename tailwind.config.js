/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      center: true,
      fontSize: {
        sm: "16px",
        md: "18px",
        lg: "24px",
        xl: "48px",
        "2xl": "50px",
        "3xl": "72px",
      },
      colors: {
        lightblack: "#0f0f10",
      },
    },
  },
  plugins: [],
};
