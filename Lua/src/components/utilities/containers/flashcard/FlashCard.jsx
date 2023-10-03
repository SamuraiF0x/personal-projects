import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { darkTheme } from "../../../../assets/theme/theme";
import FlashCardShadow from "./FlashCardShadow";

export default function FlashCard() {
	return (
		<View>
			<TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button}>
				<Text style={styles.text}>Lua</Text>
			</TouchableOpacity>
			<FlashCardShadow />
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		zIndex: 1,
		height: 190,
		width: 170,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		backgroundColor: darkTheme.colors.cardBg,
	},
	text: {
		...darkTheme.textVariants.flashcard,
	},
});
