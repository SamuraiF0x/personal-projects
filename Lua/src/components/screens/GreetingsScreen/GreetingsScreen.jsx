import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import BlobButton from "../../utilities/buttons/blobButton/BlobButton";
import NoiseGrid from "../../utilities/perlin noise/NoiseGrid";

export default function GreetingsScreen() {
	const [changeScreen, setChangeScreen] = useState(false);
	const [fluidBackground, setFluidBackground] = useState(true);
	const onBlobPressed = () => {
		if (changeScreen) setFluidBackground(!fluidBackground);
		if (!fluidBackground) {
			setChangeScreen(!changeScreen);
			if (changeScreen) setFluidBackground(!fluidBackground);
		}
	};

	return (
		<>
			{changeScreen ? (
				<>
					<StatusBar translucent backgroundColor="transparent" />
					<NoiseGrid fluidBackground={fluidBackground} />
					<View style={styles.blobBg}>
						<BlobButton onBlobPressed={onBlobPressed} text={"Next"} />
					</View>
				</>
			) : (
				<View style={styles.container}>
					<Text style={styles.sectionTitle}>Samurai Fox</Text>
					<BlobButton onBlobPressed={() => setChangeScreen(!changeScreen)} text={"Let's go"} />
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	blobBg: {
		position: "absolute",
		right: "5%",
		bottom: "2%",
	},
	sectionTitle: {
		...darkTheme.textVariants.sectionTitle,
	},
});
