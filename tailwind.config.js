/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slide: {
					"0%": {
						transform: "translateX(200px)",
						opacity: "0",
					},
					"50%": {
						transform: "scale(1.1)",
						opacity: "0.5",
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1",
					},
				},

				fade: {
					"0%": {
						transform: "scale(1)",
						opacity: "1",
					},
					"50%": {
						transform: "scale(0.75)",
						opacity: "0",
					},
					"100%": {
						transform: "scale(0)",
						opacity: "0",
					},
				},
			},
			animation: {
				slide: "slide 1000ms ease-in-out forwards",
				fade: "fade 1000ms  ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
