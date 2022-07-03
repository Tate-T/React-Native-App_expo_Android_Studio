import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import PostList from "../../components/PostsList";
import db from '../../firebase/config';

export default function DefaultScreen({ route, navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );
    const [posts, setPosts] = useState([]);

    const getAllPost = async () => {
        await db.firestore()
            .collection('posts')
            .onSnapshot((data) => setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))))
    };

    // useEffect(() => {
    //     if (route.params) { setPosts(prevState => [...prevState, route.params]) }
    // }, [route.params])

    useEffect(() => {
        getAllPost();
        const onChange = () => {
            const width = Dimensions.get("window").width - 16 * 2;
            setdimensions(width);
        };
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <Text style={styles.postTitle}>Publications</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Image source={require('../../assets/logOutBtn.png')} style={styles.logOutBtn} />
                </TouchableOpacity>
            </View>
            <View style={styles.postProfile}>
                <Image
                    style={styles.avatarProfile}
                    source={require("../../assets/avatar.png")}
                />
                <View style={styles.textProfile}>
                    <Text style={styles.textProfileName}>Natali Romanova</Text>
                    <Text style={styles.textProfileEmail}>email@example.com</Text>
                </View>
            </View>
            <PostList posts={posts} onPressComment={() => navigation.navigate('Comment', { postId: item.id })} onPressMap={() => navigation.navigate('Map', { location: item.location })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    postHeader: {
        marginTop: 55,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        paddingHorizontal: 16
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
        marginLeft: 16,
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