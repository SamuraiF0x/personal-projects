import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";

export default function BrowseAllButton() {
	return (
		<TouchableOpacity onPress={() => alert("Hello, world!")}>
			<Text style={styles.text}>Browse all -{">"}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		...darkTheme.textVariants.contentL,
		color: darkTheme.colors.purple,
	},
});
