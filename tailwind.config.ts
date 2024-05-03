import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				quote: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
			},
			animation: {
				"text-display": "textDisplay 1.5s linear",
			},
			keyframes: {
				textDisplay: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
