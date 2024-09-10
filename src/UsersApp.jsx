import { LoginPage } from "./auth/pages/LoginPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";
import UsersPage  from "./pages/UsersPage";




export const UsersApp = () => {

    // desestructuramos nuestros atributos y metodos del custom hook
    const {login, handlerLogout, handlerLogin} = useAuth();

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