import React from "react";
import { StyleSheet, View } from "react-native";
import { darkTheme } from "../../../assets/theme/theme";
import { LineChart } from "react-native-chart-kit";

export default function WeeklyProgressSpline({ progressCardWidth }) {
	const height = darkTheme.spacing.xxl * 1.75;

	const chartConfig = {
		decimalPlaces: 0,
		height: height,
		backgroundColor: darkTheme.colors.cardBg85,
		backgroundGradientFrom: darkTheme.colors.cardBg85,
		backgroundGradientFromOpacity: 1,
		backgroundGradientTo: darkTheme.colors.cardBg85,
		backgroundGradientToOpacity: 1,
		color: () => darkTheme.colors.white,
		strokeWidth: 2,
		propsForBackgroundLines: { strokeDasharray: "0,0", stroke: darkTheme.colors.white, opacity: 0.2 },
		propsForVerticalLabels: { ...darkTheme.textVariants.contentXS },
		propsForHorizontalLabels: { ...darkTheme.textVariants.contentXS },

		linejoinType: "round",

		scrollableInfoViewStyle: {
			justifyContent: "center",
			alignContent: "center",
			borderRadius: darkTheme.spacing.m,
			borderWidth: 2,
			borderColor: darkTheme.colors.red,
			backgroundColor: darkTheme.colors.red50,
		},
		scrollableInfoTextStyle: {
			...darkTheme.textVariants.contentS,
			marginHorizontal: 1,
			flex: 1,
			marginTop: -3,
			marginLeft: 2,
			textAlign: "center",
		},
		scrollableInfoSize: { width: darkTheme.spacing.m * 1.5, height: darkTheme.spacing.m },
		scrollableInfoOffset: -10,
	};

	const dataFixConstant = 1.025;
	const data = {
		labels: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Today"],
		datasets: [
			{
				data: [
					4 * dataFixConstant,
					2 * dataFixConstant,
					0 * dataFixConstant,
					6 * dataFixConstant,
					4 * dataFixConstant,
					8 * dataFixConstant,
					5 * dataFixConstant,
				],
				color: () => darkTheme.colors.green75,
			},
		],
	};

	return (
		<View style={styles.container}>
			<LineChart
				data={data}
				width={progressCardWidth - darkTheme.spacing.m}
				height={height}
				chartConfig={chartConfig}
				bezier
				fromZero={true}
				withShadow={false}
				withVerticalLines={false}
				withScrollableDot={true}
				formatYLabel={(yValue) => (parseInt(yValue) === 0 ? 0 : Math.floor(parseInt(yValue)))}
				xLabelsOffset={-5}
				yLabelsOffset={10}
				style={{
					marginLeft: -15,
					paddingLeft: 15,
					marginRight: 20,
					paddingRight: 15,
					marginTop: -9,
					paddingTop: 8,
					marginBottom: -20,
					paddingBottom: 10,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: darkTheme.colors.bg,
	},
	sectionTitle: {
		...darkTheme.textVariants.sectionTitle,
	},
});
