import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";

export default function DailyProgressBar() {
	return (
		<View style={styles.horizontalContainer}>
			<Text style={styles.text}>Lessons today 3/5</Text>
			<View style={styles.progressBar}>
				<View style={styles.progress}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	horizontalContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		...darkTheme.textVariants.contentM,
		color: darkTheme.colors.gray,
		paddingRight: darkTheme.spacing.xs,
	},
	progressBar: {
		width: 2 * darkTheme.spacing.xl,
		height: darkTheme.spacing.m,
		borderRadius: 50,
		backgroundColor: darkTheme.colors.cardBg,
	},
	progress: {
		width: "75%",
		height: darkTheme.spacing.m,
		borderRadius: 50,
		backgroundColor: darkTheme.colors.purple,
	},
});
