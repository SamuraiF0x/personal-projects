import React from "react";
import { Stack } from "tamagui";

export default Backdrop = ({ manageAccOpen, onCloseBackdrop, ...props }) => {
	return (
		<Stack f={1} bg={"$bg"} o={manageAccOpen ? 0.95 : 0} onPress={() => onCloseBackdrop()}>
			{props.children}
		</Stack>
	);
};
