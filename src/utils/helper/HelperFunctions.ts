import {Appearance} from "react-native";

export const HelperFunctions = {
    isDarkMode: (): boolean => {
        const colorScheme = Appearance.getColorScheme();
        return colorScheme === 'dark';
    },
}