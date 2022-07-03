import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '../router';
import { NavigationContainer } from '@react-navigation/native';
import { authStateChange } from '../../redux/auth/authOperations';

const Main = () => {
    const { stateChange } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChange())
    }, [])

    const routing = useRoute(stateChange);

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