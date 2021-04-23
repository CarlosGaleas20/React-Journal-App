import { db } from "../firebase/firebase-config";
import Swal from 'sweetalert2';
import types from "../types/types";
import {loadNotes} from '../helpers/loadNotes'
import fileUpload from "../helpers/fileUpload";


export const startNewNote = () =>{
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const newNote = {
            tittle: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        
        dispatch(activeNote(doc.id, newNote));
        dispatch(startLoadingNotes(uid));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async(dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
} 

export const setNotes = ( notes ) =>({
    type: types.notesLoad,
    payload: notes
})

export const updateNotes = (note) => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const noteToFirestore = {...note};
        if(!note.url){
            delete noteToFirestore.url;
        }
        delete noteToFirestore.id
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, note));
        Swal.fire({
            icon: 'success',
            title: 'Note saved successfully ',
          });
    }

}

export const refreshNote = (id, note) =>({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {

        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please Wait',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file);

        activeNote.url = fileUrl;

        dispatch(updateNotes( activeNote ));

        Swal.close();
    }
}

export const startDeleting = ( id ) =>{
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( deleteNote(id));
        Swal.fire({
            icon: 'success',
            title: 'Note eliminated successfully ',
          });
    }
} 

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});