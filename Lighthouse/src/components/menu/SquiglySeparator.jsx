import React from "react";
import { Dimensions } from "react-native";
import { H6 } from "tamagui";

const { width } = Dimensions.get("window");

export default function SquiglySeparator({ isMenu }) {
	const squigles = "~".repeat(isMenu ? width / 18 : width / 11.5);

	return (
		<H6 c="$primary" o={0.5}>
			{squigles}
		</H6>
	);
}
