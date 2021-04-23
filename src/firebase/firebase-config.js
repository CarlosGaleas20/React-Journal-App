import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2GLoBujyGfoc0SBTemHdHEKAlPOfbuEk",
    authDomain: "react-app-journal-79dee.firebaseapp.com",
    projectId: "react-app-journal-79dee",
    storageBucket: "react-app-journal-79dee.appspot.com",
    messagingSenderId: "412555753038",
    appId: "1:412555753038:web:b1c8bf2038bb2c278cf51f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
