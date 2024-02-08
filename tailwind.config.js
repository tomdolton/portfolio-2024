/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": "url('/images/background-1@2x.webp')",
        "gradient-2": "url('/images/background-2@2x.webp')",
        "gradient-3": "url('/images/background-3@2x.webp')",
      },

      colors: {
        black: "#020009",
        white: "#fff",
        offwhite: "#F0F0F0",
        navy: "#151E38",
        grey: {
          100: "#FFFFFF1F",
          200: "#F0F0F03C",
        },

        blue: {
          100: "#52D3C9",
          200: "#3DDCB2",
          400: "#09A9D2",
          500: "#6095DA",
          900: "#010106",
        },
      },
    },

    // fontFamily: {
    //   sans: ["var(--font-dmSans)", ...fontFamily.sans],
    // },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};
