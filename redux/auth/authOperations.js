import { auth } from '../../firebase/config';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';

const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    try {
        const user = await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
};

const authSignInUser = () => async (dispatch, getState) => {

};

const authSignOutUser = () => async (dispatch, getState) => {

};

export { authSignInUser, authSignUpUser, authSignOutUser };