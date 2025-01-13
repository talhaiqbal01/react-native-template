import {View, type ViewProps, Platform, StatusBar} from 'react-native';
import {useThemeColor} from "../utils/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedView({style, lightColor, darkColor, ...otherProps}: ThemedViewProps) {
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');

    return <View style={[{
        backgroundColor,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }, style]} {...otherProps} />;
}
