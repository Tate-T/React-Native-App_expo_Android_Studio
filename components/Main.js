import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '../router';
import { NavigationContainer } from '@react-navigation/native';
import db from '../firebase/config';
// import { authStateChange } from '../../redux/auth/authOperations';

const Main = () => {
    const [user, setUser] = useState(null);
    const state = useSelector(state => state)

    db.auth().onAuthStateChanged((user) => setUser(user))
    // useEffect(authStateChange(), [])

    const routing = useRoute(user);

    return <NavigationContainer style={styles.container}>
        {routing}
    </NavigationContainer>
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});