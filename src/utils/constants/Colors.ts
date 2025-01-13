/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

const lightBackgroundColor = '#fff';
const darkBackgroundColor = '#151718';
const primaryColor = '#7cb9e8';
const secondaryColor= '#6cb4ee';

export const Colors = {
    //-- Light colors
    light: {
        text: '#11181C',
        background: lightBackgroundColor,
        primary: primaryColor,
        secondary: secondaryColor,
        elevatedButtonBackground: primaryColor,
        elevatedButtonForeground: lightBackgroundColor,
        tint: primaryColor,
        icon: '#000000',
        tabIconDefault: '#000000',
        tabIconSelected: primaryColor,
        logo: '#111111',
    },

    //-- Dark colors
    dark: {
        text: '#ECEDEE',
        background: darkBackgroundColor,
        primary: secondaryColor,
        secondary: secondaryColor,
        elevatedButtonBackground: secondaryColor,
        elevatedButtonForeground: darkBackgroundColor,
        tint: primaryColor,
        icon: '#ffffff',
        tabIconDefault: '#ffffff',
        tabIconSelected: primaryColor,
        logo: '#ffffff',
    },
};
