import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ['Montserrat', 'sans-serif'],
			sans: ['Noto Sans', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#3C89E3',
				blue: {
					light: '#55BAFF',
					dark: '#028CEB'
				}
			}
		}
	},
	plugins: [typography()],
}

export default config;
