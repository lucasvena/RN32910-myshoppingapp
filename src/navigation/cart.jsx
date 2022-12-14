import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from "../screens";
import { COLORS } from "../constants/themes/colors";
import { isIOS } from "../utils";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Cart"
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
            name="Cart"
            component={Cart}/>   
        </Stack.Navigator>
    )
}

export default CartNavigator;