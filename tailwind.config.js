/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60cb94",
      },
      keyframes: {
        introLogoLeft: {
          "0%": {
            left: "-12rem",
          },
          "100%": {
            left: "0rem",
          },
        },
        introLogoRight: {
          "0%": {
            right: "-12rem",
          },
          "100%": {
            right: "0rem",
          },
        },
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        introLogoLeft: "introLogoLeft 1s cubic-bezier(.03,.81,.78,.12)",
        introLogoRight: "introLogoRight 1s cubic-bezier(.03,.81,.78,.12)",
        fade1: "fadeOut 0.4s ease-in-out",
        fade15: "fadeOut 0.9s ease-in-out",
        fade2: "fadeOut 1.3s ease-in-out",
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
