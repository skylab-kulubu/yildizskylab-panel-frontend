const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				customDarkPurple: '#06032C',
				customLightPink: '#EADAFF',
				customLightPurple: '#7C77B3',
				customAccent: '#27A68E',
			},
			fontFamily: {
				bebas: ['Bebas Neue', ...fontFamily.sans],
				inter: ['Inter', ...fontFamily.sans],
				marck: ['Marck Script', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
