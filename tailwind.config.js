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
        "gradient-1": "url('/images/background-1@2x.png')",
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

        cerulean: {
          100: "#52D3C9",
          400: "#09A9D2",
          900: "#3DDCB2",
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
