import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import DeckCardContent from "../../screens/HomeScreen/DeckCardContent";
import ButtonCard from "../buttons/cardButton/ButtonCard";

export default function Strip() {
	const [ButtonCardWidth, setButtonCardWidth] = useState();
	const handleOnLayout = (event) => {
		setButtonCardWidth(event.nativeEvent.layout.width + darkTheme.spacing.m);
	};

	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			snapToInterval={ButtonCardWidth}
			decelerationRate="fast"
			style={styles.containerMargin}
			contentContainerStyle={styles.containerPadding}>
			<View>
				<ButtonCard onLayout={handleOnLayout}>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
			<View>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
				<ButtonCard>
					<DeckCardContent />
				</ButtonCard>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	containerMargin: {
		marginHorizontal: -darkTheme.spacing.m,
	},
	containerPadding: {
		paddingLeft: darkTheme.spacing.s,
		paddingRight: darkTheme.spacing.m,
	},
});
