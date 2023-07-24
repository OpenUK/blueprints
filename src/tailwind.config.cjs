/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'openuk-blue':  "#004973",
				'openuk-grey':"#f4f4f4;"
				
			},
			fontFamily: {
				sans: ['Hind', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
