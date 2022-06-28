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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text tyle={styles.snap}>use camers</Text>
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
        height: 300,
        marginTop: 50,
        alignItems: 'center'
    },
    snap: { marginTop: 200 }
});