import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({id, tittle, body, date, url }) => {

    const dispatch = useDispatch();
    const noteDate = moment(date);


    const handleLoadNote = () => {
        dispatch(activeNote(id,{
            tittle, body, date, url
        }))
    }


    return (
        <div 
            className="journal__entry animate__animated animate__fadeInLeft"
            onClick={handleLoadNote}
        >
            {
                url
                &&
                <div 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
                className="journal__entry-picture">
            </div>
            }
            
            <div className="journal__entry-body">
                <p className="journal__entry-tittle">{tittle}</p>
                <p className="journal__entry-content">{body}</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>
            
        </div>
    )
}

export default JournalEntry;
