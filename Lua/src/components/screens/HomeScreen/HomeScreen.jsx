import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import InsightCardContent from "./InsightCardContent";
import ButtonCard from "../../utilities/buttons/cardButton/ButtonCard";
import FlashCard from "../../utilities/containers/flashcard/FlashCard";
import UserAvatar from "../../utilities/UserAvatar";
import FlagIcon from "../../utilities/FlagIcon";
import BrowseAllButton from "../../utilities/buttons/BrowseAllButton";
import DailyProgressBar from "../../utilities/charts/DailyProgressBar";
import WeeklyProgressSpline from "../../utilities/charts/WeeklyProgressSpline";
import CardContainer from "../../utilities/containers/CardContainer";
import Strip from "../../utilities/containers/Strip";
import NavigationBar from "../../utilities/containers/NavigationBar";

export default function HomeScreen() {
	const [progressCardWidth, setProgressCardWidth] = useState(200);
	const handleOnLayout = (event) => {
		setProgressCardWidth(event.nativeEvent.layout.width);
	};
	return (
		<View style={styles.container}>
			<View style={styles.horizontalCenteredContainer}>
				<FlagIcon />
				<View style={styles.horizontalCenteredContainer}>
					<Text style={styles.sectionTitle}>Samurai Fox</Text>
					<View style={styles.avatar}>
						<UserAvatar />
					</View>
				</View>
			</View>
			<View>
				<View style={styles.horizontalContainer}>
					<Text style={styles.sectionTitle}>Progress</Text>
					<DailyProgressBar />
				</View>
				<View style={styles.stretchableCard}>
					<CardContainer shadowType={"passive"} onLayout={handleOnLayout}>
						<WeeklyProgressSpline progressCardWidth={progressCardWidth} />
					</CardContainer>
				</View>
			</View>
			<View style={styles.horizontalContainer}>
				<View>
					<Text style={styles.sectionTitle}>Seedlings</Text>
					<View style={styles.flashcard}>
						<FlashCard />
					</View>
				</View>
				<View>
					<Text style={styles.sectionTitle}>Insight</Text>
					<View style={styles.stretchableCard}>
						<ButtonCard shadowType={"passive"}>
							<InsightCardContent title={"Total words"} data={"348"} color={"yellow"} />
						</ButtonCard>
						<ButtonCard shadowType={"passive"}>
							<InsightCardContent title={"Mastered words"} data={"88"} />
						</ButtonCard>
					</View>
				</View>
			</View>
			<View>
				<View style={styles.horizontalContainer}>
					<Text style={styles.sectionTitle}>Decks</Text>
					<BrowseAllButton />
				</View>
				<Strip />
			</View>
			<NavigationBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "space-between",
		backgroundColor: darkTheme.colors.bg,
	},
	horizontalContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	horizontalCenteredContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	avatar: {
		marginLeft: darkTheme.spacing.s,
	},
	sectionTitle: {
		...darkTheme.textVariants.sectionTitle,
	},
	stretchableCard: {
		marginLeft: -darkTheme.spacing.s,
		marginRight: -darkTheme.spacing.s,
	},
	flashcard: {
		alignSelf: "flex-start",
		marginTop: darkTheme.spacing.m,
	},
});
