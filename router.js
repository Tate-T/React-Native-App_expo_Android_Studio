import React from "react";

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import MainScreen from './Screens/main/MainScreen';
import PostScreen from './Screens/main/PostScreen';
import CreateScreen from './Screens/main/CreateScreen';
import ProfileScreen from './Screens/main/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (<AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name='Main'
                component={MainScreen} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name='Login'
                component={LoginScreen} />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name='Registration'
                component={RegistrationScreen} />
        </AuthStack.Navigator>)
    }
    return (<MainTab.Navigator >
        <MainTab.Screen
            options={{ headerShown: false }} name="Main" component={MainScreen} />
        <MainTab.Screen
            options={{ headerShown: false }} name="Create" component={CreateScreen} />
        <MainTab.Screen
            options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>)
}