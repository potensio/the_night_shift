// tailwind.config.js

const { transform } = require("next/dist/build/swc");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "5rem",
      },
      animation: {
        "loop-scroll": "loop-scroll 16s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em", // 4% is equal to 0.04em
      },
    },
  },
  plugins: [],
};
