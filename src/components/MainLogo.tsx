import {Image} from 'react-native';
import {Sizes} from "../utils/constants/Sizes";
import {Logos} from "../utils/constants/Logos";
import {useThemeColor} from "../utils/hooks/useThemeColor";

export type MainLogoProps = {
    lightColor?: string;
    darkColor?: string;
    size?: number;
};

export function MainLogo({
                             lightColor,
                             darkColor,
                             size = Sizes.logoSm
                         }: MainLogoProps) {

    const color = useThemeColor({light: lightColor, dark: darkColor}, 'logo');

    return (
        <Image
            tintColor={color}
            style={[
                {height: size, width: size},
            ]}

            source={Logos.mainLogoLight}
        />
    );
}
