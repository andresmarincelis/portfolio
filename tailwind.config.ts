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
        secondary: "#ff6600",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(6, 6, 6, 0.5) -5.91%, rgba(0, 0, 0, 0.5) 111.58%)",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
    }
  },
  plugins: [],
} satisfies Config;

