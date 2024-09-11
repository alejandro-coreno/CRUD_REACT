import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar} from "../components/layout/Navbar";
import UsersPage from "../pages/UsersPage";

// componete que muestra la ruta UserRoutes
export const UserRoutes = ({login, handlerLogout}) => {
    return (
        <>  
            <Navbar login={login} handlerLogout={handlerLogout} />

            <Routes>
                <Route path="users" element={ <UsersPage />} />
                <Route path="/" element={ <Navigate to="/users" />} />
            </Routes>
        </>
    );
}