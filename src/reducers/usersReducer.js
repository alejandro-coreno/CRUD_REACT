// estado con useReducer para manejar la lista de usuarios dependiendo de la accion

// recibe dos valores el estado y la accion
export const usersReducer = (state = [], action) => {
    

    // Modificara el estado dependiendo de la accion
    switch ( action.type ) {
        case 'addUser':

        

            // guardamos los usuarios anteriores y agregamos uno nuevo
            return [
                ...state,
                {
                    ...action.payload,
                    id: action.id
                }
            ];
    
        default:
            return state;
    }
}