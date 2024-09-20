
import { UserContext } from "./UserContext";
import { useUsers } from "../hooks/useUsers";

// creamos nuestras funcion proveedorar la cual comparte la data o el contexto de los users  a nuestros componentes hijos
export const UserProvider = ({children}) => {

    // obtenemos nuestros metodos y atributos del custom hook useUsers
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

    // retornamos nuestro contexto con la data para que todos los componentes en ese orden puedan acceder a la informacion
    return (
        <UserContext.Provider value={{
            users,
            userSelected, 
            initialUserForm, 
            handlerAddUser, 
            visibleForm,

            handlerRemoveUser, 
            handlerUserSelectedForm,
            handlerOpenForm,
            handlerCloseForm
        }}>
            {children}
        </UserContext.Provider>
    );
}