import React from "react";
import { H2, H4, XStack } from "tamagui";

export default HomeHeader = ({ activeTab, menuOpen, setMenuOpen, manageAccOpen, setManageAccOpen }) => {
	return (
		<XStack ai="center" jc="space-between" o={0.75} py="$3">
			<XStack ai="center" gap="$2">
				<H2
					ff="$title"
					c="$text"
					animation="bouncy"
					pressStyle={{
						scale: 1.1,
						bg: "$fusion",
						br: 10,
					}}
					onPressIn={() => setMenuOpen(!menuOpen)}>
					=
				</H2>

				<H2
					ff="$title"
					c="$text"
					animation="bouncy"
					enterStyle={{
						scale: 1.5,
						x: -10,
					}}>
					{manageAccOpen ? "Menu" : menuOpen ? "Hi, Šimun" : activeTab}
				</H2>
			</XStack>

			{menuOpen ? (
				<H4
					ff="$title"
					c="$primary"
					animation="bouncy"
					pressStyle={{
						scale: 1.1,
						bg: "$fusion",
						br: 10,
					}}
					onPressIn={() => setManageAccOpen(!manageAccOpen)}>
					{manageAccOpen ? "done" : "manage account"}
				</H4>
			) : (
				<XStack ai="center" space="$2">
					<H2 ff="$title" c="$text">
						O
					</H2>

					<H2 ff="$title" c="$text">
						V
					</H2>
				</XStack>
			)}
		</XStack>
	);
};
