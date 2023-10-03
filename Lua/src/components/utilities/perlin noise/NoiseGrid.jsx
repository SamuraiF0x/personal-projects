import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import { OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";
import { Canvas, Fill, Group, useClockValue, useFont, useTouchHandler, useValue } from "@shopify/react-native-skia";
import FluidWords, { wordsCOLS, wordsROWS } from "./FluidWords";
import FluidBackground, { fluidBgCOLS, fluidBgROWS } from "./FluidBackground";

const wordsRows = new Array(wordsCOLS).fill(0).map((_, i) => i);
const wordsCols = new Array(wordsROWS).fill(0).map((_, i) => i);
const fluidBgRows = new Array(fluidBgCOLS).fill(0).map((_, i) => i);
const fluidBgCols = new Array(fluidBgROWS).fill(0).map((_, i) => i);

export default function NoiseGrid({ fluidBackground = true }) {
	const clock = useClockValue();

	// fluid words noise
	const { width, height } = useWindowDimensions();
	const font = useFont(OpenSans_800ExtraBold, height / wordsRows);

	const pointer = useValue({ x: width / 2, y: height / 2 });
	const onTouch = useTouchHandler({
		onActive: (pt) => (pointer.current = pt),
	});

	if (font === null) return null;

	const rows = fluidBackground ? fluidBgRows : wordsRows;
	const cols = fluidBackground ? fluidBgCols : wordsCols;

	return (
		<Canvas style={styles.canvas} onTouch={onTouch}>
			<Group>
				<Fill color={darkTheme.colors.background} />
				{rows.map((_i, i) =>
					cols.map((_j, j) => {
						return fluidBackground ? (
							<FluidBackground key={`${i}-${j}`} i={i} j={j} clock={clock} />
						) : (
							<FluidWords key={`${i}-${j}`} i={i} j={j} font={font} pointer={pointer} clock={clock} />
						);
					})
				)}
			</Group>
		</Canvas>
	);
}

const styles = StyleSheet.create({
	canvas: {
		flex: 1,
		marginHorizontal: -darkTheme.spacing.m,
		marginBottom: -darkTheme.spacing.xs,
		marginTop: -darkTheme.spacing.s,
	},
});
