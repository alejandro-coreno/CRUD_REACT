import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar} from "../components/layout/Navbar";
import { RegisterPage} from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";
import UsersPage from "../pages/UsersPage";

// componete que muestra la ruta UserRoutes
export const UserRoutes = () => {

    return (
        <>  
            {/* Importamos nuestro UserProvider el cual contrendra la data correspondiente a los users */}
            <UserProvider>
                <Navbar />

                <Routes>
                    <Route path="users" element={ <UsersPage /> }/>
                    
                    <Route path="/users/register" element={ <RegisterPage /> }/>

                    {/* Dependiendo de cual sea el id dinamico , se editara */}
                    <Route path="/users/edit/:id" element={ <RegisterPage /> }/>

                    <Route path="/" element={ <Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    );
}