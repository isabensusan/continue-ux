import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#F7F7F7',
        purple: {
          chart: '#A78BFA',
        },
        yellow: {
          bar: '#FDE047',
        },
      },
    },
  },
  plugins: [],
}
export default config
