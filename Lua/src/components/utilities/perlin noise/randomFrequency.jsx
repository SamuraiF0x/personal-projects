import alea from "alea";
import { useMemo } from "react";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { createNoise2D } from "simplex-noise";

function generateFrequencyNoise(min, max, decimalPlaces, frequency, clock) {
	const prng = alea("seed");
	const noise = createNoise2D(prng);
	const randomNum = (1 + noise(frequency.value, clock.current * frequency.value)) / 2;
	const rand = randomNum * (max - min) + min;
	const power = Math.pow(10, decimalPlaces);
	return Math.floor(rand * power) / power;
}

export function randomFrequency(start, min, max, decimalPlaces, clock) {
	const frequency = useSharedValue(start);
	const spring = { mass: 0.8, damping: 20, stiffness: 20 };

	useMemo(() => {
		const frequencyNoise = generateFrequencyNoise(min, max, decimalPlaces, frequency, clock);
		frequency.value = withSpring(frequencyNoise, spring);
	}, []);

	return frequency;
}
