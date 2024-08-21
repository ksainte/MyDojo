/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      screens: {
        'small': '480px',   // Custom small breakpoint (e.g., mobile devices)
        'medium': '768px',  // Custom medium breakpoint (e.g., tablets)
        'lg': '1024px',     // Default large breakpoint (e.g., laptops)
        'xl': '1280px',     // Default extra-large breakpoint (e.g., desktops)
        '2xl': '1536px',
        'max-lg': {'max': '1024px'}, 
      },
      fontSize: {
        'fluid': 'clamp(1rem, 2vw + 1rem, 2.5rem)', // Custom fluid size
      },
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
