import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  content: [],
  prefix: '',
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
 
      });
    }),
  ],
} satisfies Config;

export default config;
