import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
