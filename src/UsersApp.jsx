import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { UserRoutes } from "./routes/UserRoutes";




export const UsersApp = () => {

    // desestructuramos nuestros atributos y metodos del custom hook
    const {login, handlerLogout, handlerLogin} = useAuth();

    return (
        <Routes>
            
            {/* Validamos si esta logeado el usuario y renderizamos la vista */}
            {
                login.isAuth 
                ?  
                    <Route path="/*" element={ <UserRoutes login={login} handlerLogout={handlerLogout} /> } />
                :
                    <>
                        <Route path="/login" element={ <LoginPage handlerLogin={handlerLogin} /> } />
                        <Route path="/*" element={ <Navigate to="/login" />} />
                    </>
                    
            }
        </Routes>
    );
}