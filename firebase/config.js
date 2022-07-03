import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0eQtBCTkNOWtDfRoEWR8HBYnkB2ozoYY",
    authDomain: "app-test-49645.firebaseapp.com",
    projectId: "app-test-49645",
    storageBucket: "app-test-49645.appspot.com",
    messagingSenderId: "597349288590",
    appId: "1:597349288590:web:b106ee0d11a6117bb157df",
    measurementId: "G-CXZMBTZ3LT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);