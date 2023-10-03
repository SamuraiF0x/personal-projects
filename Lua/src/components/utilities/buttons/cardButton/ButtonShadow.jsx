import React from "react";
import { StyleSheet, View } from "react-native";
import { darkTheme } from "../../../../assets/theme/theme";

export default function ButtonShadow(shadowType) {
	return <View style={styles(shadowType).shadow}></View>;
}

const styles = ({ shadowType }) =>
	StyleSheet.create({
		shadow: {
			position: "absolute",
			height: "100%",
			width: "100%",
			marginLeft: darkTheme.spacing.s,
			marginTop: darkTheme.spacing.s,
			borderRadius: 15,
			backgroundColor: shadowType === "passive" ? darkTheme.colors.shadowPassive : darkTheme.colors.shadowActive,
		},
	});
