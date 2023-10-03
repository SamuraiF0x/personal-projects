import { ScrollView, YStack } from "tamagui";
import NoteCard from "./NoteCard";

export default Notes = () => {
	return (
		<ScrollView f={1} showsVerticalScrollIndicator={false}>
			<YStack space="$4" mb="$5">
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
			</YStack>
		</ScrollView>
	);
};
