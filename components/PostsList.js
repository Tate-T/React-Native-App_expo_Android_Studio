import React from "react";
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

const PostList = ({ posts }) => {
    return (
        <FlatList
            style={styles.list}
            data={posts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={(item) =>
            (<View >
                <Image
                    source={require("../assets/avatar.png")}
                    // source={{ uri: item.photo }}
                    style={styles.postImage} />

                <Text style={styles.nameDescription}>name</Text>
                <View style={styles.description}>
                    <Image source={require('../assets/comment.png')} style={styles.commentIcon} />
                    <Text style={styles.commentDescription}>0</Text>
                    <Image source={require('../assets/map.png')} style={styles.locationIcon} />
                    <Text style={styles.locationDescription}>location</Text>
                </View>
            </View>)} />
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 32,
    },
    postImage: {
        height: 240,
        width: '100%',
        borderRadius: 8
    },
    nameDescription: {
        marginTop: 11,
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18.75
    },
    commentDescription: {
        marginLeft: 9,
        marginRight: 53,
        color: '#BDBDBD',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18.75
    },
    description: {
        flexDirection: 'row',
        marginTop: 11,
        marginBottom: 32
    },
    locationDescription: {
        marginLeft: 8,
        color: '#212121',
        textDecorationLine: 'underline',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
    }
});

export default PostList;