import React from "react";
import { Switch } from "react-native";

const ColorPaletteSwitch = ({ lightMode, setLightMode }) => {
	const [lightMode, setLightMode] = useState(false);
	const toggleSwitch = () => setLightMode((previousState) => !previousState);

	return <Switch value={lightMode} onValueChange={toggleSwitch} />;
};

export default { ColorPaletteSwitch };
