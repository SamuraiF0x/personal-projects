import React from "react";
import { Dimensions } from "react-native";
import { interpolate, dist, useComputedValue, vec, Group, Text, RoundedRect, Box, rrect, rect, FitBox, mix } from "@shopify/react-native-skia";
import { darkTheme } from "../../../assets/theme/theme";
import { createNoise2D } from "simplex-noise";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { wordWorm } from "./wordWorm";

const { width, height } = Dimensions.get("window");
export const wordsCOLS = 3;
export const wordsROWS = 12;
const SIZE = { width: width / wordsCOLS, height: height / wordsROWS };
const fontSize = { active: 1.6, passive: 0.8 };
const DIGITS = new Array(55).fill(0).map((_, i) => `${i}`); //80
const F = 0.0004;
const R = 100;
const A = 5.5;
const noise = createNoise2D();

// SOURCE
// https://www.ef.com/wwen/blog/language/13-words-with-no-english-translation/
// https://www.rocketlanguages.com/blog/20-of-the-worlds-most-beautiful-untranslatable-words
// https://travelmelodies.com/beautiful-words/

const WORDS = [
	// Portuguese
	"Saudade",
	"Nefelibata",
	// Spanish
	"Sobremesa",
	"Duende",
	"Sirimiri",
	"Vacilando",
	"Querencia",
	// Italian
	"Commuovere",
	// French
	"Flâneur",
	"Depaysement",
	"Retrouvailles",
	"Raconteur",
	"Dès vu",
	"Serein",
	// German
	"Waldeinsamkeit",
	"Fernweh",
	"Sprachgefühl",
	"Heimat",
	// English
	"Mellifluous",
	"Abditory",
	// Old English
	"Dustsceawung",
	"Selcouth",
	// Welsh
	"Hiraeth",
	"Cynefin",
	// Scottish Gaelic
	"Còsagach",
	"Camhanaich",
	// Dutch
	"Gezelligheid",
	"Voorpret",
	// Swedish
	"Mångata",
	"Smultronställe",
	"Lagom",
	"Livsnjutare",
	"Fika",
	// Danish
	"Hyggelig",
	"Onism",
	"Arbejdsglæde",
	// Norwegian
	"Utepils",
	"Forelsket",
	"Kos",
	// Finnish
	"Revontulet",
	"Yötön yö",
	// Icelandic
	"Gluggaveður",
	"Mysa",
	// Latin
	"Perambulō",
	// Greek
	"βροντή", // Brontide
	"σωφροσύνη", // Sophrosyne
	"Ἠλύσιον", // Elysian
	"μετάνοια", // Metanoia
	// // // // Japanese
	// // // "森羅万象", // Shinrabansho
	// // // "侘寂", // Wabi-Sabi
	// // // "落葉", // Rakuyou
	// // // "ひとりたび", // Hitoritabi
	// // // "木漏れ日", // Komorebi
	// // // "恋の予感", // Koi No Yokan
	// // // "脱俗", // Datsuzoku
	// // // "だつぞく", // Datsuzoku (hiragana)
	// // // "幽玄", // Yūgen
	// // // "生き甲斐", // Ikigai
	// // // "積ん読", // Tsundoku
	// // // "川明かり", // Kawaakari
	// // // // Korean
	// // // "눈치", // Nunchi
	// // // // Mandarin
	// // // "缘分", // Yuánfèn
	// // // // Chinese
	// // // "热闹", // Ré nao
	// // // "無為", // Wu wei
	// // // // Arabic
	// // // "يقبرني", // Ya’aburnee
	// // // "حنان ", // Hanan
	// // // // Urdu
	// // // "گویا", // Goya
	// // // "جذبہ ", // Jazba
	// // // // Hindi
	// // // "जिजीविषा", // Jijivisha
	// // // // Sanskrit
	// // // "रिमझिम", // Rimjhim
	// // // "रसास्वाद", // Rasāsvāda
	// // // "मुदिता", // Muditā
	// // // // Inuit
	// // // "ᐃᒃᑦᓱᐊᕐᐳᒃ", // Iktsuarpuk
	// Russian
	"Тоска", // Toska
	// Tagalog
	"Kilig",
	// Yaghan
	"Mamihlapinatapei",
	// Balinese
	"Rame",
	// Kwangali (Namibia)
	"Hanyauku",
	// Nguni (South African)
	"Ubuntu",
];

export default function FluidWords({ i, j, font, pointer, clock }) {
	const x = i * SIZE.width;
	const y = j * SIZE.height;
	// const text = DIGITS[Math.round(Math.random() * (DIGITS.length - 1))];
	const text = WORDS[Math.round(Math.random() * (DIGITS.length - 1))];
	const [symbolWidth] = font.getGlyphWidths(font.getGlyphIDs(text));
	const origin = vec(x + SIZE.width / 3, y + SIZE.height);

	useAnimationFrame(() => (pointer.current = wordWorm(width, height)));

	const transform = useComputedValue(
		() => [
			{
				scale: interpolate(dist(pointer.current, origin), [0, R], [fontSize.active, fontSize.passive], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				}),
			},
		],
		[pointer]
	);

	const dx = useComputedValue(() => {
		const d = A * noise(x, clock.current * F);
		return origin.x - symbolWidth * 2 + d;
	}, [clock]);

	const dy = useComputedValue(() => {
		const d = A * noise(y, clock.current * F);
		return origin.y + font.getSize() / 2 + d;
	}, [clock]);

	return (
		<Group transform={transform} origin={origin}>
			{/* <RoundedRect width={20} height={20} r={5} color="#cc5cc6" /> */}
			{/* <FitBox src={rect(0, 0, 20, 20)} dst={rect(0, 0, 20, 20)}> */}
			{/* <RoundedRect x={dx} y={dy} width={symbolWidth} height={font.getSize()} r={5} color="#fff" />
				<Text text={text} x={dx} y={dy} font={font} color={darkTheme.colors.primary} /> */}

			{/* <Box dx={dx} dy={dy} box={rrect(rect(1, 1, 22, 22), 5, 5)} color="#fff555" /> */}
			{/* <RoundedRect rect={rrect(rect(1, 1, 22, 22), 5, 5)} color="#fff555" /> */}
			<Text x={dx} y={dy} text={text} font={font} color={darkTheme.colors.red} />
			{/* </RoundedRect> */}
			{/* </FitBox> */}
		</Group>
	);
}
