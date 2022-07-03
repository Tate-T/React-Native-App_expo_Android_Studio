import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from "react-native";
// import PostList from "../../components/PostsList";
import { authSignOutUser } from "../../redux/auth/authOperations";
import db from '../../firebase/config';

export default function ProfileScreen() {
    const [userPosts, setUserPosts] = useState([]);
    const dispatch = useDispatch();
    const { userId } = useSelector(state => state.auth)

    const getUsersPosts = async () => {
        await db.firestore()
            .collection('posts')
            .where('userId', '==', userId)
            .onSnapshot((data) =>
                setUserPosts(data.docs.map(doc => ({ ...doc.data() }))))
    };

    useEffect(() => {
        getUsersPosts();
    }, []);

    const signOut = () => {
        dispatch(authSignOutUser())
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require("../../assets/PhotoBG.png")}
            >
                <View style={styles.postsContainer}>

                    <TouchableOpacity
                        onPress={() => signOut()}
                    >
                        <Image source={require('../../assets/logOutBtn.png')} style={styles.logOutBtn} />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Image
                            style={styles.avatar}
                            source={require("../../assets/avatar.png")}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Text style={styles.avatarBtn}>&#9587;</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Natali Romanova</Text>
                        <FlatList
                            data={userPosts}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                            (<View >
                                <Image
                                    // source={require("../../assets/avatar.png")}
                                    source={{ uri: item.photo }}
                                    style={styles.postImage} />
                                <Text style={styles.commentText}>{item.comment}</Text>
                            </View>)}
                            style={styles.list} />
                        {/* <TouchableOpacity
                            onPress={() => navigation.navigate('Comment')}
                        > */}
                        {/* <PostList posts={posts} onPressComment={() => navigation.navigate('Comment')} onPressMap={() => navigation.navigate('Map')} /> */}
                        {/* </TouchableOpacity> */}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postsContainer: {
        backgroundColor: '#fff',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        paddingHorizontal: 16,
        height: 550,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    avatar: {
        position: 'absolute',
        top: -140,
        left: 105,
        borderRadius: 16,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
    },
    avatarBtn: {
        position: 'absolute',
        top: -60,
        left: 50,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#E8E8E8',
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        color: '#E8E8E8',
        textAlign: 'center',
        fontSize: 17
    },
    logOutBtn: {
        marginLeft: 'auto',
        marginTop: 24,
        width: 24,
        height: 24,
    },
    header: {
        alignItems: "center",
        marginTop: 32,
        marginBottom: 33,
    },
    headerTitle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        lineHeight: 35.16,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
    postImage: {
        height: 240,
        width: '100%',
        borderRadius: 8,
    },
});