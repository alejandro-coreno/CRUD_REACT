import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar} from "../components/layout/Navbar";
import { RegisterPage} from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";
import UsersPage from "../pages/UsersPage";

// componete que muestra la ruta UserRoutes
export const UserRoutes = ({login, handlerLogout}) => {

    // obtenemos nuestros metodos y atributos del custom hook
     const { 
        users,
        userSelected, 
        initialUserForm, 
        handlerAddUser, 
        visibleForm,

        handlerRemoveUser, 
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();

    return (
        <>  
            <Navbar login={login} handlerLogout={handlerLogout} />

            <Routes>
                <Route path="users" element={ <UsersPage 
                    users={users}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                    userSelected={userSelected} />}
                />
                <Route path="/users/register" element={
                    <RegisterPage  handlerAddUser={handlerAddUser} initialUserForm={initialUserForm}/>} />

                {/* Dependiendo de cual sea el id sera dinamico para editar */}
                <Route path="/users/edit/:id" element={
                    <RegisterPage users={users}  handlerAddUser={handlerAddUser} initialUserForm={initialUserForm}/>} />

                <Route path="/" element={ <Navigate to="/users" />} />
            </Routes>
        </>
    );
}