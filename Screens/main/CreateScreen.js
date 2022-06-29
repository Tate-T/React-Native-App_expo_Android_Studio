import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Camera } from 'expo-camera';

export default function CreateScreen({ navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsunc();
        setPhoto(photo.uri);
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
            <Camera style={styles.camera}>
                {photo && <View style={styles.takePhotoContainer}>
                    <Image source={{ uri: photo }} />
                </View>}
                <TouchableOpacity
                    onPress={takePhoto}
                    style={styles.snapContainer}
                >
                    <Text style={styles.snap}>use camers</Text>
                </TouchableOpacity>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center'
    },
    snap: { marginTop: 200 },
    takePhotoContainer: {
        position: "absolute",
        top: 50,
        left: 10,
        height: 200,
        width: 200,
        borderColor: '#fff',
        borderWidth: 1
    }
});