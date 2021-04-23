import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import JournalEntries from './JournalEntries'
import { startNewNote } from '../../actions/notes'

const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleNewNote = () =>{
        dispatch(startNewNote());
    }



    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar mt-5 animate__animated animate__fadeInLeft">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> { name }</span>
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogout}
                    >
                        Logout
                    </button>
            </div>
            <div 
                className="journal__new-entry animate__animated animate__fadeInLeft"
                onClick={handleNewNote}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New Entry</p>
            </div>

            <JournalEntries />
            
        </aside>
    )
}

export default Sidebar;
