import {Text, type TextProps} from 'react-native';
import {useThemeColor} from "../utils/hooks/useThemeColor";
import {TextTypes} from "../utils/constants/TextTypes";
import {TextStyle} from "../styles/TextStyle";

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: string;
};

export function ThemedText({
                               style,
                               lightColor,
                               darkColor,
                               type = TextTypes.default,
                               ...rest
                           }: ThemedTextProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Text
            style={[
                {color},
                type === TextTypes.default ? TextStyle.bodyLarge : undefined,
                type === TextTypes.labelSmall ? TextStyle.labelSmall : undefined,
                type === TextTypes.labelMedium ? TextStyle.labelMedium : undefined,
                type === TextTypes.labelLarge ? TextStyle.labelLarge : undefined,
                type === TextTypes.bodySmall ? TextStyle.bodySmall : undefined,
                type === TextTypes.bodyMedium ? TextStyle.bodyMedium : undefined,
                type === TextTypes.bodyLarge ? TextStyle.bodyLarge : undefined,
                type === TextTypes.titleSmall ? TextStyle.titleSmall : undefined,
                type === TextTypes.titleMedium ? TextStyle.titleMedium : undefined,
                type === TextTypes.titleLarge ? TextStyle.titleLarge : undefined,
                type === TextTypes.headlineSmall ? TextStyle.headlineSmall : undefined,
                type === TextTypes.headlineMedium ? TextStyle.headlineMedium : undefined,
                type === TextTypes.headlineLarge ? TextStyle.headlineLarge : undefined,
                type === TextTypes.displaySmall ? TextStyle.displaySmall : undefined,
                type === TextTypes.displayMedium ? TextStyle.displayMedium : undefined,
                type === TextTypes.displayLarge ? TextStyle.displayLarge : undefined,
                style,
            ]}
            {...rest}
        />
    );
}
