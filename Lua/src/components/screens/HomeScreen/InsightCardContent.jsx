import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";

export default function InsightCardContent({ title, data, color }) {
	return (
		<View style={styles().container}>
			<Text style={styles().insight}>{title}</Text>
			<Text style={styles(color).deckWords}>{data}</Text>
		</View>
	);
}

const styles = (color) =>
	StyleSheet.create({
		container: {
			justifyContent: "space-around",
		},
		insight: {
			...darkTheme.textVariants.contentM,
			color: darkTheme.colors.gray,
		},
		deckWords: {
			...darkTheme.textVariants.contentXL,
			color: color === "yellow" ? darkTheme.colors.yellow : darkTheme.colors.green,
			paddingLeft: darkTheme.spacing.m,
		},
	});
