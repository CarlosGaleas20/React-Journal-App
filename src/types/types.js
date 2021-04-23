

const types = {
    //Tipos para el login
    login: '[Auth] Login',
    logout: '[Auth] Logout',
    //tipos para los errores
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    //Boton de carga
    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',
    //Agregar notas por usuario
    notesAddNew: '[Notes] New Note',
    notesActive: '[Notes] Set Active Note',
    notesLoad: '[Notes] Load a Note',
    notesUpdate: '[Notes] Update a Note',
    notesFileUrl: '[Notes] Update image for url',
    notesDelete: '[Notes] Delete a Note',
    notesLogoutCleaning: '[Notes] Cleaning panel notes',
}

export default types;