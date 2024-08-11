import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-nunito)", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: "#efefef",
        blue: "#4198ff",
        "dark-blue": "#0067e0",
        green: "#28c32b",
        red: "#ff4141",
        orange: "#ffa841",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss/discussions/12039#discussioncomment-10063510
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addVariant }: any) => {
      addVariant("starting", "@starting-style");
    },
  ],
};
export default config;
