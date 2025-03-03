/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F0A031",
        black: {
          1: "#000000",
          2: "#222222",
          3: "#262626",
          4: "#3D3D3D"
        },
        gray: {
          1: "#E7E7E7",
          2: "#808080",
          3: "#BFBFBF",
          4: "#B0B0B0"
        },
        lightGray: {
          1: "#F6F6F6",
          2: "#FAFAFA"
        },
        darkRed: "#D5294D",
        red: {
          1: "#F03131"
        }
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      screens: {
        xs: "375px", 
        sm: "640px", 
        md: "768px", 
        lg: "900px",
        xl: "1024px", 
        "2xl": "1536px",
      },
     
    },
  },
  plugins: [],
};
