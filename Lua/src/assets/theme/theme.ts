const palette = {
	bg: "#202048",
	cardBg: "#282859",
	cardBg85: "#282859d9",
	shadowPassive: "#30306a40",
	shadowActive: "#ed185e40",
	white: "#faf6e1",
	gray: "#8d8b95",
	purple: "#d44293",
	palePurple: "#d4429380",
	paleRed: "#f47185",
	paleRed75: "#f47185bf",
	red: "#ed185e",
	red50: "#ed185e80",
	green: "#01a175",
	green75: "#01a175bf",
	paleGreen: "#58c5b0",
	paleGreen75: "#58c5b0bf",
	yellow: "#feb040",
};

const darkTheme = {
	colors: {
		...palette,
		background: palette.bg,
		foreground: palette.cardBg,
		primary: palette.white,
		success: palette.green,
		danger: palette.yellow,
		failure: palette.red,
	},
	spacing: {
		xs: 5,
		s: 10,
		m: 20,
		l: 35,
		xl: 40,
		xxl: 50,
	},
	textVariants: {
		sectionTitle: {
			fontFamily: "OpenSans_800ExtraBold",
			fontSize: 20,
			color: palette.white,
		},
		flashcard: {
			fontFamily: "Belleza_400Regular",
			fontSize: 35,
			color: palette.green,
		},
		contentXS: {
			fontFamily: "Belleza_400Regular",
			fontSize: 10,
			color: palette.white,
			opacity: 0.75,
		},
		contentS: {
			fontFamily: "Belleza_400Regular",
			fontSize: 12,
			color: palette.white,
		},
		contentM: {
			fontFamily: "Belleza_400Regular",
			fontSize: 16,
			color: palette.purple,
		},
		contentL: {
			fontFamily: "Belleza_400Regular",
			fontSize: 20,
			color: palette.green,
		},
		contentXL: {
			fontFamily: "Belleza_400Regular",
			fontSize: 25,
			color: palette.green,
		},
	},
};

const lightTheme = {
	...darkTheme,
	colors: {
		...darkTheme.colors,
		background: palette.white,
		foreground: palette.bg,
		primary: palette.bg,
	},
};

export { darkTheme, lightTheme };
