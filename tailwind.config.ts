import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bubble-bg': "url('/bubble-bg.svg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'min': '320px',
        // => @media (min-width: 320px) { ... }
        '2min': '375px',
        // => @media (min-width: 375px) { ... }
      },
      colors: {
        primary: '#325CC8',
        secondary: '#505155',
        secondaryTwo: '#686A73'
      },
    },
  },
  plugins: [],
}

export default config
