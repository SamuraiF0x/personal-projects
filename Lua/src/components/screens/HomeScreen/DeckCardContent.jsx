import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";

export default function DeckCardContent() {
	return (
		<View style={styles.container}>
			<Text style={styles.deckName}>Disquiet</Text>
			<Text style={styles.deckWordCount}>
				53 <Text style={styles.white}>words</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-around",
	},
	deckName: {
		...darkTheme.textVariants.contentM,
	},
	deckWordCount: {
		...darkTheme.textVariants.contentL,
	},
	white: {
		color: darkTheme.colors.white,
	},
});
