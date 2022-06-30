import React from "react";
import {
    StyleSheet,
    View,
    Module
} from "react-native";
import PostList from "../../components/PostsList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from "../nestedScreens/DefaultScreen";
import CommentScreen from "../nestedScreens/CommentScreen";
import MapScreen from "../nestedScreens/MapScreen";

const nestedScreen = createNativeStackNavigator();

export default function PostScreen({ route, navigation }) {


    return (
        <View style={styles.container}>
            <nestedScreen.Navigator
                tabBarOptions={{ showLabel: false }}
                style={styles.mainNavigation}>
                <nestedScreen.Screen
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                    }}
                    name="Default" component={DefaultScreen}
                />
                <nestedScreen.Screen
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' }
                    }}
                    name='Comment'
                    component={CommentScreen} />

                <nestedScreen.Screen
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => <Image source={require('../../assets/userBtn.png')} style={styles.userBtn} />
                    }}
                    name="Map" component={MapScreen} />

            </nestedScreen.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    postHeader: {
        marginTop: 55,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD'
    },
    postTitle: {
        marginRight: 100,
        textAlign: 'center',
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    logOutBtn: {
        marginRight: 10,
        marginBottom: 10,
        width: 24,
        height: 24,
    },
    postProfile: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 32,
    },
    avatarProfile: {
        width: 60,
        height: 60,
        marginLeft: 16
    },
    textProfile: {
        marginLeft: 8,
    },
    textProfileName: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    textProfileEmail: {
        color: 'rgba(33, 33, 33, 0.8)',
        fontSize: 11,
    },
});