import { db } from "../firebase/firebase-config"



export const loadNotes = async(uid) =>{
    const notesList = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesList.forEach( listChild => {
        notes.push({
            id: listChild.id,
            ...listChild.data()
        })
    }) 

    return notes;
}