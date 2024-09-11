import { useReducer } from "react";
import {loginReducer} from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

// custom hook para separar la logica del login


// datos iniciales del estado del login
// preguntamos si existe data en el session storage, si no existe manda por defecto los valores del objeto
const initialLogin =  JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const useAuth = () => {
    //manejamos el estado del login con el useReducer
    const [login, dispatch] = useReducer(loginReducer, initialLogin );

    // funcion para iniciar login
    const handlerLogin = ({ username, password}) => {

        // guardamos el valor de retorno de nuestro authService para el login
        const isLogin = loginUser({ username, password });

        //implementamos un login
        // si es true avanzamos a modificar el estado del login
        if (isLogin) {
            // handlerLogin
            // despachamos el estado en login en isAuth true
            const user = {username: 'admin'};
            dispatch({
                type: 'login',
                payload: user
            });

            //almacenamos en el sesionStorage el usuario para percitir los datos
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
        }
        else {
            Swal.fire({
                title: "Error Login",
                text: "Username || Password invalidos, error",
                icon: "error"
            });
        }
    }

    // funcion para cerrar la sesion
    const handlerLogout = () => {
        //cambiamos el estado a logout
        dispatch({
            type: 'logout'
        });
        //eliminamos los datos de la sesion
        sessionStorage.removeItem('login');
    }

    // retortamos nuestros atributos y metodos del hook
    return {
        login,
        handlerLogin,
        handlerLogout
    }
}