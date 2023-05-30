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
        "custom-gray": "#D9D9D9",
        "custom-gray2": "#565656",
        "custom-gray3": "#A6A6A6",
        "custom-black": "#414141",
        "custom-gray4": "#ECECEC",
        "custom-gray5": "#505050",
        "custom-green": "#166E00",
        "custom-gray6": "#7A7A7A",
        "custom-gray7": "#6D6D6D",
        "customg-gray8": "#E7E7E7",
        "custom-gray10": "#352525",
        "custom-gray11": "#737373",
        "custom-gray12": "#EDEDED",
        "custom-gray13": "#878787",
        "custom-gray14": "#F7F7F7",
        "custom-gray15": "#646464",
        "custom-red": "#DA0D15",
        "custom-gray16": "#5B5B5B",
      },
      fontSize: {
        "custom-xsm": "12px",
        "custom-sm": "14px",
        "custom-base": "16px",
        "custom-xbase": "18px",
        "custom-md": "24px",
        "custom-lg": "36px",
        "custom-xl": "42px",
        "custom-2xl": "45px",
      },
    },
  },
  plugins: [],
};
