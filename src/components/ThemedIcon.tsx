import {useThemeColor} from "../utils/hooks/useThemeColor";
import {Sizes} from "../utils/constants/Sizes";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ThemedIconProps = {
    lightColor?: string;
    darkColor?: string;
    size?: number;
    iconName?: any;
};

export function ThemedIcon({
                               lightColor,
                               darkColor,
                               size = Sizes.iconSm,
                               iconName = 'checkmark-circle'
                           }: ThemedIconProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'icon');

    return <Ionicons name={iconName} size={size} color={color}/>;
}
