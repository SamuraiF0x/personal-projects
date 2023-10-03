import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { darkTheme } from "../../assets/theme/theme";

export default function FlagIcon() {
	return <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.container}></TouchableOpacity>;
}

const styles = StyleSheet.create({
	container: {
		width: darkTheme.spacing.xxl,
		height: darkTheme.spacing.l,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: darkTheme.colors.red,
		backgroundColor: darkTheme.colors.shadowActive,
	},
});
