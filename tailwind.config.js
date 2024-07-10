/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-firaSans)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#426672",
          hover: "#d7ccc0",
        },
        "custom-dark": "#030842",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        animation: {
          "bounce-in":
            "bounceIn 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both 9s",
          "animate-image": "animateImage 3s ease-in-out forwards 5.5s",
          "line-anim": "line-anim 1.8s ease forwards",
          fill: "fill 1s ease forwards 4.8s",
          "stroke-d": "d 0.4s ease forwards",
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3) translateY(-200px)" },
          "50%": { opacity: "1", transform: "translateY(-10px)" },
          "60%": { transform: "translateY(5px)" },
          "70%": { transform: "translateY(-5px)" },
          "90%": { transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        animateImage: {
          "0%": { transform: "scale(0) rotateY(0deg)", opacity: "0" },
          "20%": { transform: "scale(1) rotateY(1440deg)", opacity: "1" },
          "75%": {
            transform:
              "scale(1) translateX(-550px) rotateY(1440deg) rotate(720deg)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1) translateX(-370px) rotate(720deg)",
            opacity: "1",
          },
        },
        lineAnim: {
          to: { "stroke-dashoffset": "0%" },
        },
        fill: {
          from: { fill: "transparent" },
          to: { fill: "white" },
        },
        d: {
          from: { "stroke-width": "4px", fill: "white" },
          to: { "stroke-width": "0px", fill: "transparent" },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
