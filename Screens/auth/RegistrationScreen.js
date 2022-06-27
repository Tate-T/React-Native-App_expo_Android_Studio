import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions
} from "react-native";

const initialState = {
    login: "",
    email: "",
    password: "",
};


export default function RegistrationScreen() {
    console.log(Platform.OS);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setstate] = useState(initialState);
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2);

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

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setstate(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={require("../../assets/PhotoBG.png")}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View
                            style={{
                                ...styles.form,
                                marginBottom: isShowKeyboard ? 60 : 0,
                            }}
                        >
                            <Image
                                style={styles.avatar}
                            // source={require("../assets/avatar.png")}
                            />
                            {/* <Button
                                title="+"
                                style={styles.avatarBtn}
                            /> */}
                            <TouchableOpacity
                                activeOpacity={0.8}
                            >
                                <Text style={styles.avatarBtn}>+</Text>
                            </TouchableOpacity>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Registration</Text>
                            </View>
                            <View>
                                <TextInput
                                    placeholder="Login"
                                    style={styles.input}
                                    textAlign={"start"}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.login}
                                    onChangeText={(value) =>
                                        setstate((prevState) => ({ ...prevState, login: value }))
                                    }
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    textAlign={"start"}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.email}
                                    onChangeText={(value) =>
                                        setstate((prevState) => ({ ...prevState, email: value }))
                                    }
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    textAlign={"start"}
                                    secureTextEntry={true}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.password}
                                    onChangeText={(value) =>
                                        setstate((prevState) => ({ ...prevState, password: value }))
                                    }
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.btn}
                                onPress={keyboardHide}
                            >
                                <Text style={styles.btnTitle}>SIGN IN</Text>
                            </TouchableOpacity>
                            <Text style={styles.registrationLink}>Уже есть аккаунт? Войти</Text>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    avatar: {
        position: 'absolute',
        top: -60,
        left: 120,
        borderRadius: 16,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
    },
    avatarBtn: {
        position: 'absolute',
        top: 15,
        left: 210,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#FF6C00',
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        color: '#FF6C00',
        textAlign: 'center',
        fontSize: 17
    },
    form: {
        backgroundColor: '#fff',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        paddingHorizontal: 16,
        height: 550,
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
    },
    btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        height: 51,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTitle: {
        color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
        fontSize: 18,
    },
    header: {
        alignItems: "center",
        marginTop: 92,
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
    registrationLink: {
        marginTop: 16,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center',
    }
});