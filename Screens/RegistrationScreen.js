import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundReg}
                source={require('../assets/PhotoBG.png')}>
                <Text>Регистрация</Text>
                <TextInput></TextInput>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundReg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }

});