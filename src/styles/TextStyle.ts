/**
 * Below are the text styles that are used in the app. These text styles are defined for Text component.
 */

import {Typography} from "../utils/constants/Typography";
import {Fonts} from "../utils/constants/Fonts";

export const TextStyle = {
    //-- TextStyles for Display
    displayLarge: {
        fontSize: Typography.displayLarge,
        fontFamily: Fonts.bold,
    },
    displayMedium: {
        fontSize: Typography.displayMedium,
        fontFamily: Fonts.bold,
    },
    displaySmall: {
        fontSize: Typography.displaySmall,
        fontFamily: Fonts.semiBold,
    },

    //-- TextStyles for Headline
    headlineLarge: {
        fontSize: Typography.headlineLarge,
        fontFamily: Fonts.bold,
    },
    headlineMedium: {
        fontSize: Typography.headlineMedium,
        fontFamily: Fonts.semiBold,
    },
    headlineSmall: {
        fontSize: Typography.headlineSmall,
        fontFamily: Fonts.medium,
    },

    //-- TextStyles for Title
    titleLarge: {
        fontSize: Typography.titleLarge,
        fontFamily: Fonts.bold,
    },
    titleMedium: {
        fontSize: Typography.titleMedium,
        fontFamily: Fonts.semiBold,
    },
    titleSmall: {
        fontSize: Typography.titleSmall,
        fontFamily: Fonts.medium,
    },

    //-- TextStyles for Body
    bodyLarge: {
        fontSize: Typography.bodyLarge,
        fontFamily: Fonts.semiBold,
    },
    bodyMedium: {
        fontSize: Typography.bodyMedium,
        fontFamily: Fonts.medium,
    },
    bodySmall: {
        fontSize: Typography.bodySmall,
        fontFamily: Fonts.regular,
    },

    //-- TextStyles for Label
    labelLarge: {
        fontSize: Typography.labelLarge,
        fontFamily: Fonts.medium,
    },
    labelMedium: {
        fontSize: Typography.labelMedium,
        fontFamily: Fonts.regular,
    },
    labelSmall: {
        fontSize: Typography.labelSmall,
        fontFamily: Fonts.light,
    },
}
