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
        <>
            {
                !visibleForm || 
                // modal para formulario con bootstrap
                <div className="abrir-modal animacion fadeIn">
                    <div className="modal" style={{display: 'block'}}  tabIndex="-1">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{ userSelected.id > 0 ? 'Editar' : 'Crear'}</h5>
                                </div>
                                <div className="modal-body">
                                    <UserForm
                                        userSelected={ userSelected }  
                                        handlerAddUser={ handlerAddUser }
                                        initialUserForm={ initialUserForm }
                                        handlerCloseForm={ handlerCloseForm } 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
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

export default UsersApp;