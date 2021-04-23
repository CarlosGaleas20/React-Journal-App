import React from 'react'
import { useSelector } from 'react-redux';
import NotesPage from '../notes/NotesPage'
import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar'

const JournalPage = () => {

    const { active } = useSelector(state => state.notes);


    return (
        <>
            <div className="journal__main-content">
                <Sidebar />

                <main>
                    {
                        (active)
                        ? (<NotesPage />)
                        : (<NothingSelected />)
                    }
                </main>

            </div>
        </>
    )
}

export default JournalPage;
