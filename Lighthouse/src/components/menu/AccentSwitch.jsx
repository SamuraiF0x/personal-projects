import React from "react";
import { AnimatePresence, Circle, Stack, YStack, ZStack, useForceUpdate, useThemeName } from "tamagui";
import { accentColors, tokens } from "../../../tamagui.config";
import { updateTheme } from "@tamagui/theme";

export default AccentSwitch = ({ onAccentChange }) => {
	const themeName = useThemeName();
	const update = useForceUpdate();

	const updateAccent = (accent) => {
		updateTheme({
			name: themeName,
			theme: {
				accent: accent,
				bg: tokens.color.spaceBlue,
				bgTop: tokens.color.fusion,
				borderColor: tokens.color.beige,
				cotrast: tokens.color.spaceLatte,
				text: tokens.color.beige,
				primary: tokens.color.lavanda,
				success: tokens.color.green,
				danger: tokens.color.red,
			},
		});
		update();
		onAccentChange();
	};

	return (
		<Stack f={1} as="flex-end" jc="center">
			<AnimatePresence>
				<ZStack
					key="accentSwitch"
					f={1}
					as="center"
					jc="center"
					w="$6"
					maxHeight={215}
					animation="bouncy"
					enterStyle={{
						scale: 1.1,
					}}
					exitStyle={{
						scale: 1.1,
					}}>
					<Stack fg={1.2} m={-20} br="$2" bg={"$bg"} o={0.4} />

					<Stack fg={1.2} mb={-5} mx={1} br="$2" bg={"$accent"} o={0.75} />

					<YStack f={1} ai="center" space="$2" p="$2" br="$2" bg="$bgTop" o={0.9}>
						{Object.values(accentColors).map((accent) => (
							<Circle
								key={accent}
								bg={accent}
								size="$4"
								onPress={() => updateAccent(accent)}
								animation="bouncy"
								pressStyle={{
									scale: 1.2,
								}}
							/>
						))}
					</YStack>
				</ZStack>
			</AnimatePresence>
		</Stack>
	);
};
