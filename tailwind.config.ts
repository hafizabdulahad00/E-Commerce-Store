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
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': { 'max' :'360px'},  // Compact smartphones
        'sm': { 'max' :'480px'},   // Smartphones
        'md':  { 'max': '768px' },   // Tablets
        'lg': { 'min': '1024px' },  // Laptops and desktops
    },
  },
  plugins: [],
}
 } satisfies Config;
