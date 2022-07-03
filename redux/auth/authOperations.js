import { auth } from '../../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { authSlice } from './authReducer';

const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        const user = await currentUser;
        await user.updateProfile(
            { displayName: login }
        )

        const updateUserSuccess = await currentUser;

        const userUpdateProfile = {
            userId: updateUserSuccess.uid,
            login: updateUserSuccess.displayName
        }

        dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
};

const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
};

const authSignOutUser = () => async (dispatch, getState) => {
    await signOut(auth);

    dispatch(authSlice.actions.authSignOut())
};

const authStateChange = () => async (dispatch, getState) => {
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            const userUpdateProfile = {
                userId: user.uid,
                login: user.displayName
            };
            dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))
            dispatch(authSlice.actions.authStateChange({ stateChange: true }))
        }
    });
};

export { authSignInUser, authSignUpUser, authStateChange, authSignOutUser };