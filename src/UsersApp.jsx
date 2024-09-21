import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { UserRoutes } from "./routes/UserRoutes";
import { AuthContext } from "./auth/context/AuthContext";


export const UsersApp = () => {

    // obtenemos la data del login desde el hook context
    const { login } = useContext(AuthContext);

    return (
        <Routes>
            
            {/* Validamos si esta logeado el usuario y renderizamos la vista */}
            {
                login.isAuth 
                ?  
                    <Route path="/*" element={ <UserRoutes /> } />
                :
                    <>
                        <Route path="/login" element={ <LoginPage  /> } />
                        <Route path="/*" element={ <Navigate to="/login" />} />
                    </> 
            }
        </Routes>
    );
}