import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSpring } from "react-native-reanimated";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { darkTheme } from "../../../../assets/theme/theme";
import { useAnimationFrame } from "../../../../hooks/useAnimationFrame";
import { animateBlob } from "./animateBlob";

export default function BlobButton({ size = 200, text, delay = 2000, onBlobPressed }) {
	const [blob, setBlob] = useState({});
	const [speedChanged, setSpeedChanged] = useState(false);

	const AnimatedPath = Animated.createAnimatedComponent(Path);
	const scale = useSharedValue(1.08);

	const animatedProps = useAnimatedProps(() => ({
		scale: scale.value,
	}));

	const noiseStep = useSharedValue(0.005);
	const spring = { damping: 40, stiffness: 80 };

	const onChange = () => {
		setSpeedChanged(!speedChanged);
		scale.value = withSpring(speedChanged ? 1.08 : 1, spring);
		noiseStep.value = withSpring(speedChanged ? 0.005 : 0.02, spring);
	};

	useAnimationFrame(() => {
		setBlob(animateBlob(noiseStep.value));
	});

	return (
		<TouchableWithoutFeedback
			onPressIn={() => {
				onChange();
			}}
			onPressOut={() => {
				onChange();
				onBlobPressed();
			}}
			delayPressOut={delay}>
			<View style={styles.container}>
				<Svg viewBox="0 0 200 200" width={size} height={size}>
					<Defs>
						<LinearGradient id="gradientBlue" gradientTransform="rotate(90)">
							<Stop offset="1" stopColor={blob.startColorBlue} />
							<Stop offset="0" stopColor={blob.stopColorBlue} />
						</LinearGradient>
					</Defs>
					<Defs>
						<LinearGradient id="gradientRed" gradientTransform="rotate(90)">
							<Stop offset="1" stopColor={blob.startColorRed} stopOpacity="0.5" />
							<Stop offset="0" stopColor={blob.stopColorRed} stopOpacity="0.5" />
						</LinearGradient>
					</Defs>
					<AnimatedPath d={blob.path} stroke="url(#gradientBlue)" fill="url(#gradientRed)" animatedProps={animatedProps} scale={scale.value} />
					<Path d={blob.path} stroke="url(#gradientRed)" fill="url(#gradientBlue)" />
				</Svg>
				<Text style={styles.sectionTitle}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	sectionTitle: {
		position: "absolute",
		...darkTheme.textVariants.sectionTitle,
	},
});
