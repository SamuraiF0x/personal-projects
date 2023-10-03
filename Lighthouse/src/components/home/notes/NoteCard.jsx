import React from "react";
import { H3, Separator, SizableText, YStack } from "tamagui";

export default NoteCard = () => {
	return (
		<YStack h="$10" jc="space-between" gap="$2">
			<YStack gap="$1">
				<H3 c="$text" o={0.7}>
					Lighthouse
				</H3>

				<SizableText size="$1" c="$text" o={0.35}>
					Elegant, simple but warm and friendly note taking app Elegant, simple but warm and friendly note taking app
				</SizableText>
			</YStack>

			<Separator as="center" w="$8" o={0.35} />
		</YStack>
	);
};
