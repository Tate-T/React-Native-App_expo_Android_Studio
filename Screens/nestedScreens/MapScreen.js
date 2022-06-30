import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ navigation }) {
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
            <TouchableOpacity
                onPress={() => navigation.navigate('Default')}
            >
                <Image source={require('../../assets/backBtn.png')} style={styles.backBtn} />
            </TouchableOpacity>
            <MapView
                style={styles.mapContainer}
                initialRegion={{ longitude: '', latitude: '', latitudeDelta: '', longitudeDelta: '' }}>
                {/* <Marker title="location" coordinate={{ longitude: '', latitude: '' }} /> */}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    mapContainer: {
        flex: 1
    },
    backBtn: {
        marginTop: 50,
        marginBottom: 10,
        width: 24,
        height: 24,
    },
});