import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 25px 20px -20px rgba(82, 157, 78, 0.25)', // Custom shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
