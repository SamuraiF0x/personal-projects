import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { darkTheme } from "./src/assets/theme/theme";
import { useFonts, Belleza_400Regular } from "@expo-google-fonts/belleza";
import { OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";
import GreetingsScreen from "./src/components/screens/GreetingsScreen/GreetingsScreen";

export default function App() {
	let [fontsLoaded] = useFonts({
		Belleza_400Regular,
		OpenSans_800ExtraBold,
	});

	if (fontsLoaded)
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar animated={true} backgroundColor={darkTheme.colors.bg} />
				<GreetingsScreen />
			</SafeAreaView>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: darkTheme.spacing.m,
		paddingBottom: darkTheme.spacing.xs,
		paddingTop: darkTheme.spacing.s,
		backgroundColor: darkTheme.colors.bg,
	},
});
