import React from "react";
import { StyleSheet, View } from "react-native";
import { darkTheme } from "../../../../assets/theme/theme";

export default function FlashCardShadow() {
	return <View style={styles.shadow}></View>;
}

const styles = StyleSheet.create({
	shadow: {
		position: "absolute",
		height: "100%",
		width: "100%",
		marginLeft: darkTheme.spacing.xs,
		marginTop: -darkTheme.spacing.xs,
		transform: [{ rotate: "5deg" }],
		borderRadius: 15,
		backgroundColor: darkTheme.colors.shadowActive,
	},
});
