/*!
 =========================================================
 * React Native Template
 =========================================================
*/

import React, {useEffect} from "react";
import {useFonts} from "expo-font";
import * as Splash from "expo-splash-screen/build/index";
import NavigationHelper from "./src/utils/navigation/Navigation";
import {StatusBar} from "expo-status-bar";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
Splash.preventAutoHideAsync().then(() => {});

export default function App() {

    const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
    });

    const hideSplashScreen = async () => {
        try {
            await Splash.hideAsync();
        } catch (e) {
            console.warn(e);
        }
    };

    useEffect(() => {
        hideSplashScreen().then(() => null);
        if (fontsLoaded) {
            hideSplashScreen().then(() => null);
        }
    }, [fontsLoaded]);

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <StatusBar style={'auto'}/>
            <NavigationHelper/>
        </ThemeProvider>
    );
}
