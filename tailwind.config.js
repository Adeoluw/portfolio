/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    // screens: {
    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      keyframes: {
        "hero-head": {
          "0% ": { transform: "translateX(-500px)" },
          "50%": { transform: "translateX(100px)" },
          "75%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        "hero-text": {
          "0% ": { transform: "translateX(-500px)" },
          "50%": { transform: "translateX(100px)" },
          "75%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        "hero-out": {
          "0% ": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500px)" },
        },
        "hero-img": {
          "0% ": { transform: "translateX(500px)" },
          "50%": { transform: "translateX(-100px)" },
          "75%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        nav: {
          "0% ": { transform: "translateY(-200px)" },
          "50%": { transform: "translateY(30px)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        bounce: {
          "0% ": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        button: {
          "0% ": { transform: "translateX(-500px)" },
          "50%": { transform: "translateX(100px)" },
          "75%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        html: {
          "0%": { transform: "translateX(-500px)" },
          "100%": { transform: "translateX(0)" },
        },
        css: {
          "0%": { transform: "translateX(500px)" },
          "100%": { transform: "translateX(0)" },
        },

        js: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        "from-left": {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    animation: {
      "hero-head": "hero-text 1s ease-in-out 1",
      "hero-text": "hero-text 2s ease-in-out 1",
      "hero-img": "hero-img 2s ease-in-out 1",
      "hero-out": "hero-out 1s ease-in-out 1",
      "from-left": "from-left 1s ease-in-out 1",
      nav: "nav 1s ease-in-out 1",
      bounce: "bounce 1s ease-in-out infinite",
      button: "hero-text 2.5s ease-in-out 1",
      html: "html 1s ease-in-out 1",
      css: "css 1s ease-in-out 1",
      js: "js 1s ease-in-out 1",
    },
  },
  plugins: [],
};

