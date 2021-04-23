import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar'

const NotesPage = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);

    const {tittle, body, id} = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        
        if( note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        
        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch])

    const handleDeleteNote = () => {
        dispatch(startDeleting(id));
    }


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content animate__animated animate__fadeInRight">
                <input
                    type="text"
                    placeholder="Some awesome tittle"
                    className="notes__tittle-input"
                    name="tittle"
                    value={tittle}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happend today?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url)
                    &&
                        <div className="notes__image mt-1">
                        <img
                            src={note.url}
                            alt="Imagen"
                        />
                </div>
                }

                <button 
                    className="btn btn-danger mt-5"
                    onClick={handleDeleteNote}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default NotesPage;
