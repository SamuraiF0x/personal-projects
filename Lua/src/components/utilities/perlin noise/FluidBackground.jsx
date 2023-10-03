import React from "react";
import { Dimensions } from "react-native";
import { BlurMask, Circle, Group, useComputedValue } from "@shopify/react-native-skia";
import alea from "alea";
import { createNoise3D } from "simplex-noise";
import { randomFrequency } from "./randomFrequency";

const { width, height } = Dimensions.get("window");
export const fluidBgCOLS = 8;
export const fluidBgROWS = 14;
const SIZE = { width: width / fluidBgCOLS, height: height / fluidBgROWS };
const radius = 28;
const colors = ["#28285980", "#30306a80", "#ed185e80", "#ed185e40"];
const prng = alea("seed");
const noise = createNoise3D(prng);

export default function FluidBackground({ i, j, clock }) {
	const x = i * SIZE.width;
	const y = j * SIZE.height * 1.05;

	const noiseFrequency = randomFrequency(0.0004, 0.0002, 0.0006, 7, clock);

	const color = useComputedValue(() => {
		const index = (1 + noise(x / width, y / height, clock.current * noiseFrequency.value)) / 2;
		return colors[Math.round(index * (colors.length - 1))];
	}, [clock]);

	return (
		<Group>
			<Circle cx={x + 25} cy={y + 30} r={radius} color={color}></Circle>
			<BlurMask blur={30} style="normal" />
		</Group>
	);
}
