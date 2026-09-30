/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './content/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './elements/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        america: ['var(--font-GT-America-LC)'],
      },
      colors: {
        'title-black': '#292929',
        'title-blue': '#7A9FFE',
        'primary-text': '#525252',
        'secondary-text': '#666666',
        'primary-text-inverse': '#BFBFBF',
        'secondary-text-inverse': '#818181',
        'link-inverse': '#9F99FF',
        'overlay-text': 'rgba(255,255,255,0.7)',
        'light-blue-bg': '#EBEDFF',
        'sand-bg': '#F6F6F6',
        'inverse-bg': '#141414',
        'winter-sky-bg': '#FAFAFF',
        'charcoal-bg': '#25282B',
        'primary-border': '#D6D7F6',
        'middle-border': '#6963C4',
        'deep-border': '#352D9D',
        'graphite-border': '#424344',
        'primary-divider': 'rgba(204, 204, 204, 0.5)',
        'secondary-divider': 'rgba(204, 204, 204, 0.3)',
        'divider-purple-gradient': 'linear-gradient(270deg, #B1E1FF 0%, #B6D3F5 46.35%, #C3B3DF 100%)',
        'error-red': '#E20A0A',
        purple: '#443CB5',
        grey: '#ccc',
      },
    },
  },
  plugins: [],
};
