import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
} from "react-native";

export default function CommentScreen({ navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const sendComment = () => {
        setComments(comment.value)
        setComment('')
    }

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
            <View style={styles.commentHeader}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Default')}
                >
                    <Image source={require('../../assets/backBtn.png')} style={styles.backBtn} />
                </TouchableOpacity>
                <Text style={styles.commentTitle}>Comments</Text>
            </View>
            <View style={styles.commentsContainer}>
                <Image
                    source={require("../../assets/avatar.png")}
                    // source={{ uri: item.photo }}
                    style={styles.postImage} />
                {/* <FlatList
                    data={comment}
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={(item) =>
                    (<View >
                        <Text style={styles.commentText}>{comments}</Text>
                    </View>)}
                    style={styles.list} /> */}

                <View style={styles.inputSend}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Comment..."
                        placeholderTextColor='#BDBDBD'
                        textAlign={"left"}
                        // onFocus={() => setIsShowKeyboard(true)}
                        value={comment}
                        onChangeText={(value) =>
                            setComment((prevState) => ({ ...prevState, comment: value }))
                        }
                    />
                    <TouchableOpacity
                        onPress={sendComment}
                    >
                        <Text style={styles.commentBtn}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    commentHeader: {
        marginTop: 55,
        paddingLeft: 16,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
    },
    commentTitle: {
        textAlign: 'center',
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    backBtn: {
        marginRight: 100,
        marginBottom: 10,
        width: 24,
        height: 24,
    },
    commentsContainer: {
        paddingHorizontal: 16,
        marginTop: 32,
    },
    list: {
        // height: 100,
        // backgroundColor: 'red'
    },
    postImage: {
        height: 240,
        width: '100%',
        borderRadius: 8,
    },
    inputText: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 11.9,
        marginRight: 'auto',
        marginLeft: 16
    },
    commentText: {
        backgroundColor: '#grey'
    },
    inputSend: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        paddingBottom: 8,
        paddingTop: 8,
        color: '#BDBDBD',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginTop: 31
    },
    commentBtn: {
        backgroundColor: '#FF6C00',
        width: 34,
        height: 34,
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 8
    }
});