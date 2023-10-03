import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Alegreya_400Regular, Alegreya_700Bold } from "@expo-google-fonts/alegreya";
import { Solway_400Regular, Solway_700Bold } from "@expo-google-fonts/solway";
import { TamaguiProvider, Theme, YStack, ZStack } from "tamagui";
import config from "./tamagui.config";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SafeAreaContainer from "./src/components/utilities/SafeAreaContainer";
import HomeHeader from "./src/components/utilities/HomeHeader";
import TabMenu from "./src/components/tabs/TabMenu";
import MenuModal from "./src/components/menu/MenuModal";
import AddNoteButton from "./src/components/utilities/AddNoteButton";

export default function App() {
	const colorScheme = useColorScheme();

	const [fontsLoaded] = useFonts({
		Alegreya_400Regular,
		Alegreya_700Bold,
		Solway_400Regular,
		Solway_700Bold,
	});

	const [activeTab, setActiveTab] = useState("Notes");
	const [menuOpen, setMenuOpen] = useState(false);
	const [manageAccOpen, setManageAccOpen] = useState(false);

	useEffect(() => {
		!menuOpen && setManageAccOpen(false);
	}, [menuOpen]);

	const [themeUpdateCount, setThemeUpdateCount] = useState(0);

	// const handleUpdateAccent = () => {
	// 	setThemeUpdateCount((count) => count + 1);
	// };

	const handleAccentChange = useCallback(() => {
		setThemeUpdateCount((count) => count + 1);
	}, [setThemeUpdateCount]);

	if (!fontsLoaded) return null;

	return (
		<TamaguiProvider config={config}>
			<NavigationContainer>
				<StatusBar style="auto" />
				<Theme name={colorScheme === "dark" ? "dark" : "light"}>
					<SafeAreaContainer>
						<YStack f={1}>
							<HomeHeader
								activeTab={activeTab}
								menuOpen={menuOpen}
								setMenuOpen={setMenuOpen}
								manageAccOpen={manageAccOpen}
								setManageAccOpen={setManageAccOpen}
							/>

							<ZStack f={1}>
								<TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

								{!manageAccOpen && <AddNoteButton menuOpen={menuOpen} />}

								{menuOpen && (
									<MenuModal setMenuOpen={setMenuOpen} manageAccOpen={manageAccOpen} onAccentChange={handleAccentChange} />
								)}
							</ZStack>
						</YStack>
					</SafeAreaContainer>
				</Theme>
			</NavigationContainer>
		</TamaguiProvider>
	);
}
