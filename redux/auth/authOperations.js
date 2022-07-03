import db from '../../firebase/config';
import { authSlice } from './authReducer';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';

const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    try {
        await db.auth()
            .createUserWithEmailAndPassword(email, password)
        const user = await db.auth().currentUser;
        await user.updateProfile(
            { displayName: login }
        )

        const updateUserSuccess = await db.auth().currentUser;

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
        const user = await db.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
};

const authSignOutUser = () => async (dispatch, getState) => {

};

const authStateChange = () => async (dispatch, getState) => {
    await db.auth().onAuthStateChanged((user) => setUser(user))

};

export { authSignInUser, authSignUpUser, authStateChange, authSignOutUser };