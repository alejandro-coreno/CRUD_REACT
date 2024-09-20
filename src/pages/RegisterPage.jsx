import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm"
import { UserContext } from "../context/UserContext";

export const RegisterPage = () => {

    // obtenemos la informacion mediante el hook useContext para los usuarios
    const { users = [], initialUserForm } = useContext(UserContext)

    // inicializamos los valores del useState para editar los datos 
    const [ userSelected, setUserSelected] = useState( initialUserForm );

    //recuperamos el id que pasamos por medio de la url con el hook useParams()

    const { id } = useParams();

    useEffect(() => {
        // si existe el id que busque en la lista de usuarios y setie el estado del formulario con los datos del ID
        if ( id ) {
            const user = users.find( u => u.id == id) || initialUserForm;
            setUserSelected( user );
        }

    }, [id])
    
    return (
        <div className="container my-4">
            <h4>{ id ? 'Editar' : 'Registrar'} Usuario</h4>

            <div className="row">
                <div className="col">
                    {/* Componente UserForm */}
                    <UserForm userSelected={userSelected} />
                </div>
            </div>
            
        </div>
    );
}