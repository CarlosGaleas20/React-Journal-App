import React from 'react';
import {Provider} from 'react-redux';
import store from './components/store/store';
import AppRouter from './routes/AppRouter';

const JournalApp = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    )
}

export default JournalApp;
