import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { darkTheme } from "../../assets/theme/theme";

export default function UserAvatar({ handleOnPress, tab }) {
	return <TouchableOpacity onPress={() => handleOnPress(tab)} style={styles.container}></TouchableOpacity>;
}

const styles = StyleSheet.create({
	container: {
		width: darkTheme.spacing.xl,
		height: darkTheme.spacing.xl,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: darkTheme.colors.red,
		backgroundColor: darkTheme.colors.shadowActive,
	},
});
