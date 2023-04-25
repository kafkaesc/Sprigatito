/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			black: '#000',
			'cs-black': '#222',
			'cs-danger': '#d90429',
			'cs-danger-dark': '#b20322',
			'cs-danger-light': '#fa0a34',
			'cs-primary': '#38678f',
			'cs-primary-dark': '#2a4d6a',
			'cs-primary-light': '#4681b4',
			'cs-secondary': '#53a135',
			'cs-secondary-dark': '#3f7b28',
			'cs-secondary-light': '#5db43b',
			'cs-warning': '#ffc300',
			'cs-warning-dark': '#ebb400',
			'cs-warning-light': '#ffcc27',
			'cs-white': '#fdfdfd',
			gray: '#ddd',
			'gray-dark': '#bbb',
			'gray-light': '#eee',
			link: '#00f',
			'link-hover': '#00c',
			red: '#f00',
			white: '#fff',
		},
		extend: {},
	},
	plugins: [],
};
