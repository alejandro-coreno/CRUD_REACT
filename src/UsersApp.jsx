import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import UsersPage  from "./pages/UsersPage";
import Swal from "sweetalert2";


// datos iniciales del estado del login

const initialLogin = {
    isAuth: false,
    user: undefined
}

export const UsersApp = () => {

    //manejamos el estado del login con el useReducer
    const [login, dispatch] = useReducer(loginReducer, initialLogin );

    const handlerLogin = ({ username, password}) => {
        
        //implementamos un login
        if (username === 'admin' && password === '12345') {
            // handlerLogin
            // despachamos el estado en login
            dispatch({
                type: 'login',
                payload: {username: 'admin'}
            })
        }
        else {
            Swal.fire({
                title: "Error Login",
                text: "Username || Password invalidos, error",
                icon: "error"
            });
        }
    }

    return (
        <>
            
            {/* Validamos si esta logeado el usuario y renderizamos la vista */}
            {
                login.isAuth 
                ? 
                    <UsersPage />
                :
                    <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}