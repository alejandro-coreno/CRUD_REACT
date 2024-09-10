import {UserForm} from "./UserForm";


// componente modal para el formulario
export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm}) => {
    return (
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
    );
}

