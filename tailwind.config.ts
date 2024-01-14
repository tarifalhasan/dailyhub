import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "var(--sidebar-bg)",
        main: "rgba(0, 0, 0, .05)",
        skin: {
          "gray-500": "rgb(173, 168, 159)",
          "gray-600": "rgb(129, 123, 111)",
          "gray-800": "rgb(28, 23, 21)",
          "sidebar-border": "rgba(255, 255, 255, .05)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
