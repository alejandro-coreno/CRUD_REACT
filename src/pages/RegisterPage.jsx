import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm"

export const RegisterPage = ({ users = [],  handlerAddUser, initialUserForm,}) => {

    // inicializamos los valores del useState para editar los datos 
    const [ userSelected, setUserSelected] = useState( initialUserForm );

    //recuperamos el id que pasamos por medio de la url con el hook useParams()

    const { id } = useParams();

    useEffect(() => {
        const user = users.find( u => u.id == id) || initialUserForm;
        setUserSelected( user );
    }, [id])
    
    return (
        <div className="container my-4">
            <h4>Registro de Usuarios</h4>

            <div className="row">
                <div className="col">
                    {/* Componente UserForm */}
                    <UserForm 
                        handlerAddUser={handlerAddUser} 
                        initialUserForm={ initialUserForm }
                        userSelected={userSelected}
                    />
                </div>
            </div>
            
        </div>
    );
}