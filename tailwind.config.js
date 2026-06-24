/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        carvao: "#080808",
        bege: "#1C1610",
        brasa: "#FFA000",
        fogo: "#FF3D00",
        tbbRed: "#A11818",
        tbbRedHover: "#850E0E",
        rustico: "#FAF9F6",
        cinzaMuted: "#888888",
        cinzaCard: "#121212",
        cinzaCardHover: "#1A1A1A",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        'dm-serif': ["'DM Serif Display'", "serif"],
        italic: ["'Playfair Display'", "serif"],
        signature: ["'Kaushan Script'", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'brasa-sm': '0 2px 8px rgba(255, 160, 0, 0.15)',
        'brasa-md': '0 4px 14px rgba(255, 160, 0, 0.25)',
        'brasa-lg': '0 10px 25px rgba(255, 160, 0, 0.35)',
        'fogo-md': '0 4px 14px rgba(255, 61, 0, 0.25)',
        'glow-fogo': '0 0 15px rgba(255, 61, 0, 0.5), 0 0 30px rgba(255, 61, 0, 0.2)',
        'glow-brasa': '0 0 15px rgba(255, 160, 0, 0.4), 0 0 30px rgba(255, 160, 0, 0.1)',
        'glow-tbbRed': '0 0 15px rgba(161, 24, 24, 0.5), 0 0 30px rgba(161, 24, 24, 0.2)',
      },
      borderRadius: {
        'rustico-sm': '4px',
        'rustico-md': '8px',
        'rustico-lg': '16px',
        'rustico-xl': '24px',
      }
    },
  },
  plugins: [],
}
