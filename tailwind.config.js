/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '320px',
        'xxxs': '240px',
      },
      height: {
        '45rem': '45rem',
        '50rem': '50rem',
        '55rem': '55rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStroke: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-black': {
          '-webkit-text-stroke-color': 'black',
          'text-stroke-color': 'black',
        },
        '.stroke-2': {
          '-webkit-text-stroke-width': '2px',
          'text-stroke-width': '2px',
        },
      })
    }
  ]
};
