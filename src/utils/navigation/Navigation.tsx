import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "../routes/Routes";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();

const NavigationHelper = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.home}>
                <Stack.Screen name={Routes.home} component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationHelper;