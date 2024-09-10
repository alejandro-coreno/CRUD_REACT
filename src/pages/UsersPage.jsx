import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { UserModalForm } from "../components/UserModalForm";

const UsersPage = () => {

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
            
            {
                !visibleForm || 

                <UserModalForm 
                    userSelected={userSelected}
                    initialUserForm={ initialUserForm }
                    handlerAddUser={ handlerAddUser }
                    handlerCloseForm={handlerCloseForm}
                />
            }

            {/* Tabla de lista de usuarios */}
            <div className="container my-4">
                <h1>User App</h1>

                {/* Una fila para el componente de lista de usuarios */}
                <div className="row">                
                   
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
        </>
    );
}

export default UsersPage;