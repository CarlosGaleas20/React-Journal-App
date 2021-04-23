import types from "../types/types";
import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, setLoading } from "./ui";
import { noteLogout } from './notes';


export const startLoginEP = (email, password) => {
    return (dispatch) => {
        dispatch(setLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome:',
                    text: user.displayName
                  });
            })
            .catch( e => {
                dispatch(finishLoading());
                Swal.fire({
                    icon: 'error',
                    title: 'Login Error',
                    text: e.message,
                  });
            })
    }
}

export const startRegisterWithEmail = (email, password, name) =>{
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
         .then( async({user}) => {
             await user.updateProfile({displayName: name});
             dispatch(login(user.uid, user.displayName));
             Swal.fire({
                icon: 'success',
                title: 'User successfully registered',
                text: user.displayName
              });
         })
         .catch(e => {
            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: e.message,
              });
         })
    }

}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome:',
                    text: user.displayName
                  });
            });
    }
}

export const startLogout = () => {
    return (dispatch) =>{
        firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const login = ( uid, DisplayName) => ({
    type: types.login,
    payload:{
        uid,
        DisplayName
    }
    }
);

export const logout = () => ({
    type: types.logout
    }
);