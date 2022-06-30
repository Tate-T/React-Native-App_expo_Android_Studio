import React from "react";
import {
    StyleSheet,
    View,
    Image,
} from "react-native";

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/main/PostsScreen';
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
                name='Post'
                component={PostsScreen} />
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
    return (
        <>
            <MainTab.Navigator
                tabBarOptions={{ showLabel: false }}
                style={styles.mainNavigation}>
                <MainTab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            <Image source={require('./assets/mainBtn.png')} style={styles.userBtn} />
                    }} name="Post" component={PostsScreen} />
                <MainTab.Screen
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => <View style={styles.addBtnContainer} >
                            <Image source={require('./assets/addBtn.png')} style={styles.addBtn} />
                        </View>
                    }}
                    name="Create" component={CreateScreen} />
                <MainTab.Screen
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => <Image source={require('./assets/userBtn.png')} style={styles.userBtn} />
                    }}
                    name="Profile" component={ProfileScreen} />
            </MainTab.Navigator>
            {/* <View style={styles.navigationBorder}></View> */}
        </>
    )
}

const styles = StyleSheet.create({

    mainNavigation: {
        marginBottom: 22,
        marginTop: 'auto',
        flexDirection: "row",
        justifyContent: "center",
        borderTopWidth: 1,
        borderTopColor: '#BDBDBD'
    },
    addBtnContainer: {
        width: 70,
        height: 40, marginLeft: 31,
        marginRight: 31,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addBtn: {
        // color: '#FFFFFF',
        width: 13,
        height: 13,
    },
    userBtn: {
        width: 40,
        height: 40,
        // color: '#BDBDBD',
    },
    // navigationBorder: {
    //     height: 5,
    //     width: 134,
    //     backgroundColor: '#212121',
    //     borderWidth: 1,
    //     borderRadius: 100,
    //     marginRight: 'auto',
    //     marginLeft: 'auto',
    //     marginBottom: 7
    // }
})