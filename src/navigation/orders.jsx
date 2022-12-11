import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from "../screens";
import { COLORS } from "../constants/themes/colors";
import { isIOS } from "../utils";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? COLORS.backgroundLight : COLORS.backgroundDark,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                    fontSize: 18,
                },
                presentation: 'card',
                headerBackTitle: '',
            }}
        >
        <Stack.Screen 
            name="Orders"
            component={Orders}/>   
        </Stack.Navigator>
    )
}

export default OrderNavigator;