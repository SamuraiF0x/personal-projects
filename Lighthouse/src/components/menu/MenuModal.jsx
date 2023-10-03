import { Stack, YStack, ZStack } from "tamagui";
import Backdrop from "../utilities/Backdrop";
import BackdropBottom from "../utilities/BackdropBottom";
import SquiglySeparator from "./SquiglySeparator";
import AccentSwitch from "./AccentSwitch";
import MenuOptions from "./MenuOptions";
import NotesInfo from "./NotesInfo";

export default function MenuModal({ setMenuOpen, manageAccOpen, onAccentChange }) {
	return (
		<ZStack f={1}>
			<YStack f={1} jc="flex-end">
				<Backdrop manageAccOpen={manageAccOpen} onCloseBackdrop={() => setMenuOpen(false)}></Backdrop>

				<Stack fg={0.1}>
					{/* <SquiglySeparator /> */}
					<BackdropBottom>{!manageAccOpen && <NotesInfo />}</BackdropBottom>
				</Stack>
			</YStack>

			{manageAccOpen && <MenuOptions />}
			{!manageAccOpen && <AccentSwitch manageAccOpen={manageAccOpen} onAccentChange={onAccentChange} />}
		</ZStack>
	);
}
