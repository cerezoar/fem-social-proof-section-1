/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '375px', 
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        //primary
        verydarkmagenta: 'hsl(300, 43%, 22%)',
        softpink: 'hsl(333, 80%, 67%)',
        //neutral
        darkgraymagenta: 'hsl(303, 10%, 53%)',
        lightgraymagenta: 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)'
        // custom colors here...
      },
      fontFamily: {
        spartan: "'League Spartan', sans-serif"
      }
    },
  },
  plugins: [],
}

