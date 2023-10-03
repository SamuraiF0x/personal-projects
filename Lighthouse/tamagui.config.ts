import { createFont, createTamagui, createTheme, createTokens } from "tamagui";
import { createAnimations } from "@tamagui/animations-reanimated";
import { createGenericFont } from "@tamagui/config";
import { Easing } from "react-native-reanimated";

const animations = createAnimations({
	bouncy: {
		type: "spring",
		damping: 10,
		mass: 0.9,
		stiffness: 100,
	},
	lazy: {
		type: "spring",
		damping: 20,
		stiffness: 60,
	},
	quick: {
		type: "spring",
		damping: 20,
		mass: 1.2,
		stiffness: 250,
	},
});

// const headingFont2 = createGenericFont(
// 	"Alegreya", // This should match the CSS rules to specify font family
// 	{
// 		size: {
// 			// Define default sizes 1-16 (all are required)
// 			// These become size token names, like `$1`, `$2`, etc.
// 			1: 30,
// 			2: 50,
// 			3: 13,
// 			4: 14,
// 			5: 16,
// 			6: 18,
// 			7: 20,
// 			8: 22,
// 			9: 30,
// 			10: 42,
// 			11: 52,
// 			12: 62,
// 			13: 72,
// 			14: 92,
// 			15: 114,
// 			16: 124,
// 		},
// 		transform: {
// 			1: "none", // <Paragraph> will add `transform="none"` for sizes 1-6
// 			// 7: "uppercase", // <Paragraph> will add `transform="uppercase"` for sizes 7+. unspecified sizes will use the value from the previously before defined size
// 		},
// 		weight: {
// 			1: "700", // <Paragraph> will add `fontWeight="400"` for sizes 4-6
// 			7: "700", // <Paragraph> will add `fontWeight="700"` for sizes 7+
// 			// normal: 400,
// 			// bold: 700,
// 		},
// 		color: {
// 			// Assigned colors based on sizes.
// 			1: "#3185FC", // <Paragraph> will add `color="red"` for size 1
// 			// 2: "#3185FC", // <Paragraph> will add `color="$color"` for size 2+
// 		},
// 		letterSpacing: {
// 			1: 0.5, // Create a base
// 		},
// 		face: {
// 			400: { normal: "Alegreya_400Regular" },
// 			700: { normal: "Alegreya_700Bold" },
// 		},
// 	},
// 	{
// 		sizeLineHeight: (val) => val * 1.2,
// 	}
// );

const alegreyaFont = createFont({
	family: "Alegreya",
	size: {
		1: 10,
		2: 12,
		3: 13,
		4: 14,
		5: 15, // H6
		6: 16, // H5
		7: 17, // H4
		8: 18, // H3
		9: 25, // H2
		10: 30, // H1
		true: 20,
	},
	lineHeight: {
		1: 10,
		2: 12,
		3: 13,
		4: 14,
		5: 15, // H6
		6: 16, // H5
		7: 17, // H4
		8: 18, // H3
		9: 25, // H2
		10: 30, // H1
	},
	weight: {
		5: 400, // H6 - H3
		9: 700, // H2 - H1
	},
	letterSpacing: {
		1: 0, // H6 - H2
		10: 0.5, // H1
	},
	face: {
		400: { normal: "Alegreya_400Regular" },
		700: { normal: "Alegreya_700Bold" },
	},
});

const solwayFont = createFont({
	family: "Solway",
	size: {
		1: 14, // s
		2: 15, // m
		3: 13, // l
		4: 14, // xl
		5: 15, // H6
		6: 16, // H5
		7: 17, // H4
		8: 18, // H3
		9: 20, // H2
		10: 30, // H1
		true: 18,
	},
	lineHeight: {
		1: 22, // s
		2: 15, // m
		3: 13, // l
		4: 14, // xl
		5: 15, // H6
		6: 16, // H5
		7: 17, // H4
		8: 18, // H3
		9: 20, // H2
		10: 30, // H1
	},
	weight: {
		1: 400, // s - xl
		5: 700, // H6 - H1
	},
	letterSpacing: {
		1: 0, // H6 - H2
		10: 0.5, // H1
	},
	face: {
		400: { normal: "Solway_400Regular" },
		700: { normal: "Solway_700Bold" },
	},
});

// const bodyFont = createFont({
// 	family: "Solway",
// 	size: {
// 		xxs: 10,
// 		xs: 13.5,
// 		s: 15,
// 		m: 17.5,
// 		ml: 15,
// 		l: 18,
// 		xl: 15,
// 		xxl: 22,
// 	},
// 	lineHeight: {
// 		xxs: 10,
// 		xs: 13.5,
// 		s: 15,
// 		m: 17.5,
// 		ml: 15,
// 		l: 18,
// 		xl: 15,
// 		xxl: 22,
// 	},
// 	weight: {
// 		xxs: 400,
// 		m: 700,
// 	},
// 	letterSpacing: {
// 		xxs: 0,
// 	},
// 	face: {
// 		400: { normal: "Solway_400Regular" },
// 		700: { normal: "Solway_700Bold" },
// 	},
// });

const size = {
	0: 5,
	1: 10,
	2: 15,
	3: 20,
	4: 25,
	5: 50,
	6: 60,
	7: -15,
	8: 80,
	9: -25,
	10: 110,
	true: "true",
};

export const accentColors = {
	yellow: "#F9DC5C",
	green: "#06D6A0",
	blue: "#3185FC",
	red: "#E40066",
	orange: "#F95738",
	// pink: "#EB5489",
	// magenta: "#922D50",
	// peach: "#F49390",
};

export const tokens = createTokens({
	size,
	space: { ...size },
	radius: { 0: 0, 1: 5, 2: 18 },
	zIndex: { 0: 0, 1: 100 },
	// opacity: { 0: 0.35, 1: 0.5, 2: 0.7, 3: 0.75, 4: 0.9 },
	color: {
		//dark
		spaceBlue: "#001D3D",
		spaceBlue50: "#001D3D80",
		// spaceBlue: "#000c18", //60% darkened
		// spaceBlue: "#001125", //50
		// spaceBlue: "#00142b", //30
		// spaceBlue: "#00162e", //25
		// spaceBlue: "#001731", //20

		//light
		spaceLatte: "#F4FAFF",

		//shared
		fusion: "#2b205e", //light text & dark box
		oceanBlue: "#01295F", //light text & dark box
		beige: "#FAF0CA", //dark txt & light box
		// beige: "#ACAF9E",
		// beige: "#ADB09F",
		lavanda: "#947BD3", //primary

		...accentColors,
	},
});

const config = createTamagui({
	// defaultTheme: "dark",
	// shouldAddPrefersColorThemes: false,
	// themeClassNameOnRoot: false,
	size,
	tokens,
	animations,
	fonts: {
		title: alegreyaFont,
		heading: solwayFont,
		body: solwayFont,
	},
	themes: {
		light: {
			bg: tokens.color.spaceLatte,
			bgTop: tokens.color.beige,
			borderColor: tokens.color.oceanBlue,
			cotrast: tokens.color.oceanBlue,
			text: tokens.color.oceanBlue,
			primary: tokens.color.lavanda,
			accent: tokens.color.yellow,
			success: tokens.color.green,
			danger: tokens.color.red,
		},

		dark: {
			bg: tokens.color.spaceBlue,
			bgTop: tokens.color.fusion,
			borderColor: tokens.color.beige,
			cotrast: tokens.color.spaceLatte,
			text: tokens.color.beige,
			primary: tokens.color.lavanda,
			accent: tokens.color.yellow,
			success: tokens.color.green,
			danger: tokens.color.red,
		},
	},
	shorthands: {
		b: "bottom",
		t: "top",
		r: "right",
		l: "left",
		m: "margin",
		mx: "marginHorizontal",
		my: "marginVertical",
		mt: "marginTop",
		mb: "marginBottom",
		ml: "marginLeft",
		mr: "marginRight",
		p: "padding",
		px: "paddingHorizontal",
		py: "paddingVertical",
		pt: "paddingTop",
		pb: "paddingBottom",
		pl: "paddingLeft",
		pr: "paddingRight",
		w: "width",
		h: "height",
		f: "flex",
		fg: "flexGrow",
		fs: "flexShrink",
		ai: "alignItems",
		as: "alignSelf",
		jc: "justifyContent",
		ps: "position",
		z: "zIndex",
		c: "color",
		bg: "backgroundColor",
		o: "opacity",
		bw: "borderWidth",
		bc: "borderColor",
		br: "borderRadius",
		ta: "textAlign",
		ff: "fontFamily",
		fw: "fontWeight",
	},
});

export type AppConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}

	interface ThemeValueFallback {
		value: never;
	}
}

export default config;
