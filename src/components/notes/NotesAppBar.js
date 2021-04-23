import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { startUploading, updateNotes } from '../../actions/notes';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes);
    const noteDate = moment(note.date);

    const handleSave = () => {
        dispatch(updateNotes(note));
    }

    const handlePictureAdd = () =>{
        document.querySelector('#inputPicture').click();
    }

    const handleInputPicture = ({target}) =>{
        const file = target.files[0];
        if( file ) {
            dispatch(startUploading(file));
        }
    }


    return (
        <div className="notes__appbar animate__animated animate__fadeInRight">
            <span>{noteDate.format('LL')}</span>
            <input
                type="file"
                style={{display: 'none'}}
                id="inputPicture"
                onChange={handleInputPicture}
                name="file"
            />
            <div>
                <button
                    className="btn" 
                    onClick={handlePictureAdd}  
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSave} 
                >
                    Save
                </button>
            </div>
            
        </div>
    )
}

export default NotesAppBar;