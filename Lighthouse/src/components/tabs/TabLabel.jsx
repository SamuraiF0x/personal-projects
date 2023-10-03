import React from "react";
import { SizableText, YStack } from "tamagui";

export default TabLabel = ({ accentColor, focused, name }) => {
	return (
		<YStack space="$2">
			<SizableText size="$2" ta="center" c={focused ? accentColor ?? "$accent" : "$text"} o={focused ? 1 : 0.75}>
				{name}
			</SizableText>
		</YStack>
	);
};
