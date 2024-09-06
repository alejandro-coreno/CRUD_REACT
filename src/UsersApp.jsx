import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

const UsersApp = () => {

    // obtenemos nuestros metodos y atributos del custom hook
    const { 
        users,
        userSelected, 
        initialUserForm, 
        handlerAddUser, 
        handlerRemoveUser, 
        handlerUserSelectedForm} 
    = useUsers();
    
    return (
        <div className="container my-4">
            <h1>User App</h1>

            {/* Una fila para los dos componentes */}
            <div className="row">

                <div className="col">
                    <UserForm
                        userSelected={ userSelected }  
                        handlerAddUser={ handlerAddUser }
                        initialUserForm={ initialUserForm } 
                    />
                </div>

                <div className="col">
                    <UsersList 
                        users={ users } 
                        handlerRemoveUser={ handlerRemoveUser }
                        handlerUserSelectedForm={ handlerUserSelectedForm }
                    />
                </div>
            </div>
        </div>
    );
}

export default UsersApp;