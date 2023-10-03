import { H6, ScrollView, SizableText, YStack } from "tamagui";
import SquiglySeparator from "./SquiglySeparator";

const MenuItems = ({ text, subtext }) => {
	return (
		<YStack gap={"$2"}>
			<H6 c="$primary" o={0.75}>
				{text}
			</H6>
			{subtext && (
				<YStack gap="$1">
					<SizableText size="$2" c="$text" o={0.5}>
						{subtext}
					</SizableText>
					<SizableText size="$2" c="$accent" bg="$accent" o={1} br={"$1"}>
						{text}
					</SizableText>
				</YStack>
			)}
			<SquiglySeparator isMenu={true} />
		</YStack>
	);
};

export default function MenuOptions() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} mt={15}>
			<YStack as="flex-start" jc="center" gap="$2" mb="$5">
				<MenuItems text={"Edit profile name"} />
				<MenuItems text={"Cloud backup"} />
				<MenuItems text={"Add password"} />
				<MenuItems text={"Theme - auto mode"} />
				<MenuItems
					text={"Enable/Disable quick note"}
					subtext={"If disabled, when note is created, you won't be promted to enter Note `title`, `category` and `tags`"}
				/>
				<MenuItems text={"Text limiter"} />
				<MenuItems text={"Disable animations"} subtext={"(dropdown)"} />
				<MenuItems text={"Published notes"} />
				<MenuItems text={"Import notes"} />
				<MenuItems text={"About"} />
				<MenuItems text={"Rate and review"} />
				<MenuItems
					text={"Enable/Disable quick note"}
					subtext={"If disabled, when note is created, you won't be promted to enter Note `title`, `category` and `tags`"}
				/>
				<MenuItems text={"Text limiter"} />
				<MenuItems text={"Disable animations"} subtext={"(dropdown)"} />
				<MenuItems text={"Published notes"} />
				<MenuItems text={"Import notes"} />
				<MenuItems text={"About"} />
				<MenuItems text={"Rate and review"} />
			</YStack>
		</ScrollView>
	);
}
