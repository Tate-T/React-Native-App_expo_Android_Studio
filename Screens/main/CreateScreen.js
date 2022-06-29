import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Camera } from 'expo-camera';

const initialState = {
    name: "",
    location: "",
};

export default function CreateScreen({ navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setstate] = useState(initialState);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsunc();
        setPhoto(photo.uri);
    };

    const sendPhoto = async () => {
        navigation.navigate("Main", { photo });
        setstate('')
    };

    const deleteBtn = () => {
        setPhoto(null)
        setstate('')
    };

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setstate(initialState);
    };

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
            <View style={styles.createHeader}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                >
                    <Image source={require('../../assets/backBtn.png')} style={styles.backBtn} />
                </TouchableOpacity>
                <Text style={styles.createTitle}>Create publication</Text>
            </View>
            <View style={styles.cameraContainer}>
                <Camera style={styles.camera} >
                    {photo && <View style={styles.takePhotoContainer}>
                        <Image source={{ uri: photo }} />
                    </View>}
                    <TouchableOpacity
                        onPress={takePhoto}
                        style={styles.snapContainer}
                    >
                        <Image source={require('../../assets/camera.png')} style={styles.snapIcon} />
                    </TouchableOpacity>
                </Camera>
            </View>
            {
                photo ?
                    <Text style={styles.downloadText}>Edit photo</Text>
                    : <Text style={styles.downloadText}>Download photo</Text>
            }
            <View style={styles.inputName}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Name..."
                    placeholderTextColor='#BDBDBD'
                    textAlign={"left"}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.name}
                    onChangeText={(value) =>
                        setstate((prevState) => ({ ...prevState, name: value }))
                    }
                />
            </View>
            <View style={styles.inputLocation}>
                {!state.location && <Image source={require('../../assets/map.png')} style={styles.locationIcon} />}
                <TextInput
                    style={styles.inputText}
                    placeholder="Location..."
                    placeholderTextColor='#BDBDBD'
                    textAlign={"left"}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.location}
                    onChangeText={(value) =>
                        setstate((prevState) => ({ ...prevState, location: value }))
                    }
                />
            </View>
            {
                photo ? <TouchableOpacity
                    onPress={sendPhoto}
                    style={styles.sendPhotoBtn}
                >
                    <Text style={styles.publishText}>Publish</Text>
                </TouchableOpacity> :
                    <View
                        style={styles.sendPhotoBtnNotActive}
                    >
                        <Text style={styles.publishTextNotActive}>Publish</Text>
                    </View>
            }
            <TouchableOpacity
                onPress={deleteBtn}
                style={styles.deleteBtn}
            >
                <Image source={require('../../assets/deleteBtn.png')} />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF'
    },
    createHeader: {
        marginTop: 55,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD'
    },
    createTitle: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    backBtn: {
        marginRight: 63,
        marginBottom: 10,
        width: 24,
        height: 24,
        fill: '#BDBDBD',
    },
    cameraContainer: {
        marginTop: 32,
        borderWidth: 3,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    camera: {
        alignItems: 'center',
        height: 240,
        backgroundColor: '#F6F6F6',
    },
    snap: { marginTop: 200 },
    snapIcon: {
        margin: 20
    },
    snapContainer: {
        height: 60,
        width: 60,
        borderRadius: 100,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#FFFFFF'
    },
    downloadText: {
        marginTop: 8,
        color: '#BDBDBD',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19
    },
    inputText: {
        color: '#212121d',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 1.19,
    },
    inputName: {
        paddingTop: 33,
        paddingBottom: 15,
        color: '#BDBDBD'
    },
    inputLocation: {
        flexDirection: 'row',
        paddingTop: 32,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderColor: '#E8E8E8',
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        alignItems: 'center'
    },
    locationIcon: {
        width: 24,
        height: 24,
        marginRight: 4
    },
    sendPhotoBtn: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        height: 51,
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    sendPhotoBtnNotActive: {
        backgroundColor: "#F6F6F6",
        borderRadius: 100,
        height: 51,
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 3,
        // borderColor: '#E8E8E8',
        // backgroundColor: '#F6F6F6',
    },
    publishText: {
        color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
        fontSize: 18,
    },
    publishTextNotActive: {
        color: '#BDBDBD',
        fontSize: 18,
    },
    deleteBtn: {
        marginTop: 'auto',
        marginBottom: 22,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#F6F6F6',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 20
    }
});