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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'ball-yellow': 'rgba(238, 187, 8, 0.17)',
        'ball-red': 'rgb(202 15 3 / 17%)'
      },

      boxShadow: {
        '3xl': '0px 4px 146px 64px rgb(238 187 8 / 24%)',
        'ballRed': '0px 4px 138px rgb(202 15 3 / 44%)'
      }

    },
  },
  plugins: [],
}
export default config
