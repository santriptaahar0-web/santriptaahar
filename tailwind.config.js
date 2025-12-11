/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00c853', // Admin panel green
          hover: '#00b34b',  // Darker on hover
          light: '#00e676',  // Lighter variant
          dark: '#009624',   // Darker variant
        },
        secondary: '#00c853',
        accent: '#00e676',
        dark: {
          DEFAULT: '#0f172a',  // slate-900 (admin panel text)
          light: '#1e293b',    // slate-800
          lighter: '#334155',  // slate-700
        },
        gray: {
          brand: '#64748b',    // slate-500 (admin panel secondary text)
          light: '#94a3b8',     // slate-400
          lighter: '#cbd5e1',  // slate-300
        },
      },
      spacing: {
        '3xs': '0.5rem',   // 8px
        '2xs': '1rem',      // 16px
        'xs': '1.5rem',     // 24px
        'sm': '2rem',       // 32px
        'md': '3rem',       // 48px
        'lg': '4rem',       // 64px
      },
    },
  },
  plugins: [],
}

