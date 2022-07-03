import db from '../../firebase/config';
import { authSlice } from './authReducer';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';

const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    try {
        const user = await db.auth()
            .createUserWithEmailAndPassword(email, password)
        dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }))
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

export { authSignInUser, authSignUpUser, authSignOutUser };