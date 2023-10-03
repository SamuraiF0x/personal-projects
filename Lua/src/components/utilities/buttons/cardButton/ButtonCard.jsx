import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { darkTheme } from "../../../../assets/theme/theme";
import ButtonShadow from "./ButtonShadow";

export default function ButtonCard({ shadowType, onLayout, ...props }) {
	return (
		<View style={styles.container} onLayout={onLayout}>
			<TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button}>
				{props.children}
			</TouchableOpacity>
			<ButtonShadow shadowType={shadowType} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: darkTheme.spacing.s,
	},
	button: {
		zIndex: 1,
		minHeight: 80,
		height: "auto",
		paddingVertical: darkTheme.spacing.s,
		paddingHorizontal: darkTheme.spacing.m,
		flexDirection: "row",
		borderRadius: 15,
		backgroundColor: darkTheme.colors.cardBg85,
	},
});
