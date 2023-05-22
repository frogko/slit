/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#DA0D15",
        "custom-gray": "#D9D9D9",
        "custom-gray2": "#565656",
        "custom-gray3": "#A6A6A6",
        "custom-black": "#414141",
        "custom-gray4": "#ECECEC",
        "custom-gray5": "#505050",
        "custom-green": "#166E00",
        "custom-gray6": "#7A7A7A",
      },
    },
  },
  plugins: [],
};
