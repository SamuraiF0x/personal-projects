import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import BlobButton from "../buttons/blobButton/BlobButton";
import UserAvatar from "../UserAvatar";

const Tab = ({ tab }) => {
	const [active, setActive] = useState(false);
	const handleOnPress = () => setActive((prevActive) => !prevActive);

	return (
		<View style={styles().verticalContainer}>
			<View style={styles().avatar}>
				<UserAvatar handleOnPress={handleOnPress} tab={tab} />
			</View>
			<View style={styles(active).pill}>
				<Text style={styles().title}>{tab}</Text>
			</View>
		</View>
	);
};

export default function NavigationBar() {
	return (
		<View style={styles().container}>
			<View style={styles().horizontalContainer}>
				<Tab tab={"Home"}></Tab>
				<Tab tab={"Learn"}></Tab>
				<Tab tab={"Insight"}></Tab>
			</View>
			<View style={styles().blob}>
				<BlobButton size={100} text={"+"} delay={1000} />
			</View>
		</View>
	);
}

const styles = (active) =>
	StyleSheet.create({
		container: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		horizontalContainer: {
			flex: 0.75,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
		},
		blob: {
			flex: 0.25,
			flexDirection: "row",
			justifyContent: "flex-end",
		},
		verticalContainer: {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
		pill: {
			paddingHorizontal: darkTheme.spacing.xs,
			borderRadius: 50,
			backgroundColor: active ? darkTheme.colors.red : darkTheme.colors.bg,
			...darkTheme.textVariants.contentS,
		},
		title: {
			...darkTheme.textVariants.contentS,
		},
		avatar: {
			paddingBottom: darkTheme.spacing.xs,
		},
	});
