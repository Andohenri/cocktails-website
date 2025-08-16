import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				yellow: '#e7d393',
				'white-100': '#efefef',
			},
			fontFamily: {
				'modern-negra': ['Modern Negra', 'sans-serif'],
				'sans': ['Mona Sans', 'sans-serif'],
				'serif': ['DM Serif Text', 'serif'],
			},
			maxWidth: {
				'2xs': '16rem', // Adding the missing 2xs size
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
