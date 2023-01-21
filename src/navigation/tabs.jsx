import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { useSelector } from 'react-redux';
import { COLORS } from "../constants/themes/colors";
import CartNavigator from './cart';
import OrderNavigator from './orders';
import ShopNavigator from './shop';

const BottomTab= createBottomTabNavigator();

const Tabs = () => {
    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                },
                tabBarActiveTintColor: COLORS.primaryDark,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    paddingTop: 5,
                    paddingBottom: 10,
                    height: 60,                 
                }
            }}
        >
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} 
            options={{
                title:'Shop',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'home' : 'home-outline'} size={22} color={ focused ? COLORS.primaryDark : COLORS.gray }/>   
                )
            }}
            />
            <BottomTab.Screen name="CartTab" component={CartNavigator} 
            options={{
                title: 'Cart',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={22} color={ focused ? COLORS.primaryDark : COLORS.gray }/>   
                ),
                tabBarBadge: cart.length === 0 ? null : cart.length,
                tabBarBadgeStyle: {
                    backgroundColor: COLORS.secondary,
                    color: COLORS.white,
                    fontFamily: 'Lato-Bold',
                    fontSize: 11,
                }
            }}
            />
            <BottomTab.Screen name="OrdersTab" component={OrderNavigator} 
            options={{
                title: 'Orders',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'file-tray' : 'file-tray-outline'} size={22} color={ focused ? COLORS.primaryDark : COLORS.gray }/>   
                )
            }}
            />
        </BottomTab.Navigator>
    );
};

export default Tabs;