import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import { Navbar } from "./components/layout/Navbar";
import UsersPage  from "./pages/UsersPage";
import Swal from "sweetalert2";


// datos iniciales del estado del login
// preguntamos si existe data en el session storage, si no existe manda por defecto los valores del objeto
const initialLogin =  JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const UsersApp = () => {

    //manejamos el estado del login con el useReducer
    const [login, dispatch] = useReducer(loginReducer, initialLogin );

    // funcion para iniciar login
    const handlerLogin = ({ username, password}) => {
        
        //implementamos un login
        if (username === 'admin' && password === '1234') {
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

    return (
        <>
            
            {/* Validamos si esta logeado el usuario y renderizamos la vista */}
            {
                login.isAuth 
                ?   <>
                        <Navbar login={login} handlerLogout={handlerLogout} />
                        <UsersPage />
                    </>
                :
                    <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}