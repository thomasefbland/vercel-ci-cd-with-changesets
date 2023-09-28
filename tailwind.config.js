import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.svelte"],
	darkMode: ["class"],
	theme: {
		fontFamily: {
			sans: [...fontFamily.sans],
		},
		extend: {},
	},
};
