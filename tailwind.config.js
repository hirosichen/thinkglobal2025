/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0b09",
        cream: "#f5efe1",
        orange: "#D35400",
        orange2: "#b34800",
        muted: "#9a9389",
        line: "rgba(255,255,255,0.08)",
        card: "rgba(255,255,255,0.04)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp .8s cubic-bezier(.16,1,.3,1) both",
        marquee: "marquee 120s linear infinite",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};
