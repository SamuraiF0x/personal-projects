import { useState } from "react";
import { Circle, H1, Stack, useTheme } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export default function AddNoteButton({ menuOpen }) {
	const [opacity, setOpacity] = useState(false);

	return (
		<Stack ps="absolute" z={1} b={menuOpen ? "$10" : "$4"} r={0} o={opacity ? 0.5 : 0.9}>
			<Circle
				size="$6"
				bg={"$accent"}
				animation="bouncy"
				pressStyle={{
					scale: 1.2,
					o: 0.5,
				}}
				onPress={() => {}}>
				<LinearGradient
					width="100%"
					height="100%"
					borderRadius="$5"
					colors={["$accent", "$primary"]}
					start={[0.5, 0.5]}
					end={[0, 0]}>
					<H1 ta="center" mt="$2" c="$cotrast">
						+
					</H1>
				</LinearGradient>
			</Circle>
		</Stack>
	);
}
