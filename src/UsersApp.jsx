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
        visibleForm,

        handlerRemoveUser, 
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();
    
    return (
        <div className="container my-4">
            <h1>User App</h1>

            {/* Una fila para los dos componentes */}
            <div className="row">                
                {/* Si es verdadero muestra el formulario */}
                {
                    visibleForm && 
                    <div className="col">
                        <UserForm
                            userSelected={ userSelected }  
                            handlerAddUser={ handlerAddUser }
                            initialUserForm={ initialUserForm }
                            handlerCloseForm={ handlerCloseForm } 
                        />

                    </div>
                }
              

                <div className="col">

                    {
                        visibleForm || 
                        <button 
                            type="button" 
                            className="btn btn-primary my-2"
                            // funcion para abrir el formulario
                            onClick={ handlerOpenForm }
                        >
                            Nuevo Usuario
                        </button>
                    }

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