import React from "react";
import { H5, XStack } from "tamagui";

const BoldParagraph = ({ text }) => {
	return (
		<H5 c="$text" o={0.5}>
			{text}
		</H5>
	);
};

export default function NotesInfo() {
	return (
		<XStack jc="space-evenly">
			<BoldParagraph text={"Notes: 22"} />
			<BoldParagraph text={"Categories: 7"} />
			<BoldParagraph text={"Tags: 13"} />
		</XStack>
	);
}
