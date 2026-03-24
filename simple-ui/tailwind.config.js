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
        brand: '#3B82F6',
        'brand-hover': '#2563EB',
        'brand-on-brand': '#FFFFFF',
      },
      spacing: {
        '200': '0.5rem',
        '300': '0.75rem',
        '600': '1.5rem',
        '800': '2rem',
      },
      borderRadius: {
        '200': '0.375rem',
      },
    },
  },
  plugins: [],
}
