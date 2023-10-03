import React from "react";
import { Stack, useTheme } from "tamagui";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabLabel from "./TabLabel";
import HomeHeader from "../utilities/HomeHeader";
import NoteCard from "../home/notes/NoteCard";
import Notes from "../home/notes/Notes";

const Tab = createMaterialTopTabNavigator();

export default TabMenu = ({ activeTab, setActiveTab }) => {
	const theme = useTheme();

	return (
		<Stack f={1} mx="$9">
			<Tab.Navigator
				initialRouteName={activeTab}
				backBehavior={"initialRoute"}
				sceneContainerStyle={{ backgroundColor: theme.bg.val, paddingHorizontal: 25 }}
				screenListeners={{
					state: (e) => {
						setActiveTab(e.data.state.routes[e.data.state.index].name);
					},
				}}
				screenOptions={{
					tabBarStyle: { backgroundColor: theme.bg.val, marginBottom: 20, elevation: 0 },
					tabBarLabelStyle: { color: theme.accent.val, opacity: 0.75, fontSize: 12 },
					tabBarIndicatorStyle: { backgroundColor: theme.accent.val },
				}}>
				<Tab.Screen
					name="Categories"
					component={HomeHeader}
					options={{
						tabBarLabel: ({ focused }) => <TabLabel accentColor={theme.accent} focused={focused} name="Categories" />,
					}}
				/>
				<Tab.Screen
					name="Notes"
					component={Notes}
					options={{
						tabBarLabel: ({ focused }) => <TabLabel accentColor={theme.accent} focused={focused} name="Notes" />,
					}}
				/>
				<Tab.Screen
					name="Starred"
					component={NoteCard}
					options={{
						tabBarLabel: ({ focused }) => <TabLabel accentColor={theme.accent} focused={focused} name="Starred" />,
					}}
				/>
			</Tab.Navigator>
		</Stack>
	);
};
