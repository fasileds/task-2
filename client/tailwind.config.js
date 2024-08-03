/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        "red-950": "#4a0000",
        "green-950": "#004a00",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
