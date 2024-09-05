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
                    id: new Date().getTime()
                }
            ];
        case 'removeUser':
            
            return  state.filter( user => user.id !== action.payload);

        case 'updateUser':

            return state.map( u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }

                return u
            })

        default:
            return state;
    }
}