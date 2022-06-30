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
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ navigation }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapContainer}
                initialRegion={{ longitude: '', latitude: '', latitudeDelta: '', longitudeDelta: '' }}>
                <Marker title="location" coordinate={{ longitude: '', latitude: '' }} />
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
    }
});