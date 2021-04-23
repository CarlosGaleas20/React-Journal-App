import types from "../types/types";

const initalState = {
    notes: [],
    active: null
}

const noteReducer = (state = initalState, action) => {

    switch (action.type) {

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...state,
                notes: [],
                active: null
            }

        default:
            return state;
    }

}

export default noteReducer;