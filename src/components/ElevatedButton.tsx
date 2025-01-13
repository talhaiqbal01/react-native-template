import {useThemeColor} from "../utils/hooks/useThemeColor";

export type ThemedButtonProps = {
    lightBackgroundColor?: string;
    darkBackgroundColor?: string;
    lightForegroundColor?: string;
    darkForegroundColor?: string;
    title?: string;
    onPress?: () => void;
};

export function ElevatedButton({
                                   lightBackgroundColor,
                                   darkBackgroundColor,
                                   lightForegroundColor,
                                   darkForegroundColor,
                                   title,
                                   onPress,
                                   ...rest
                               }: ThemedButtonProps) {
    const backgroundColor = useThemeColor({light: lightBackgroundColor, dark: darkBackgroundColor}, 'elevatedButtonBackground');
    const foregroundColor = useThemeColor({light: lightForegroundColor, dark: darkForegroundColor}, 'elevatedButtonForeground');

    return (
        <></>
    );
}
