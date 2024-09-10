// guardamos el estado del formulario cuando se inicie session

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        
        case 'login':
            // actualizamos el estado en verdadero y le pasamos el valor
            return {
                isAuth: true,
                user: action.payload
            }
        case 'logout':

            return {
                isAuth: false
            }
            
        default:
            return state
    }
}