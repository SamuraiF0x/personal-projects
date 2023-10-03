import React from "react";
import { Stack } from "tamagui";

export default BackdropBottom = ({ ...props }) => {
	return (
		<Stack fg={1} jc="center" bg={"$bg"} o={0.925}>
			{props.children}
		</Stack>
	);
};
