import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList
} from "react-native";

export default function PorofileScreen({ navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );

    useEffect(() => {
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
            <ImageBackground
                style={styles.image}
                source={require("../../assets/PhotoBG.png")}
            >
                <View style={styles.postsContainer}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
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
                    </View>

                    <FlatList
                        data={posts}
                        keyExtractor={(item, indx) => indx.toString()}
                        renderItem={(item) =>
                        (<View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Comment')}
                            >
                                <Image
                                    source={require("../../assets/avatar.png")}
                                    // source={{ uri: item.photo }}
                                    style={styles.postImage} />
                            </TouchableOpacity>

                            <Text style={styles.nameDescription}>name</Text>
                            <View style={styles.description}>
                                <Image source={require('../../assets/comment.png')} style={styles.commentIcon} />
                                <Text style={styles.commentDescription}>0</Text>
                                <Image source={require('../../assets/map.png')} style={styles.locationIcon} />
                                <Text style={styles.locationDescription}>location</Text>
                            </View>
                        </View>)}
                        style={styles.list} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
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
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        lineHeight: 35.16,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
});