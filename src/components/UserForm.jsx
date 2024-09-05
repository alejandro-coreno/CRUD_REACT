import { useEffect, useState } from "react";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected }) => {

    const [userForm, setUserForm] = useState( initialUserForm );

    // desestructuramos nuestros valores iniciales del estado del formulario
    const { id, username, password, email } = userForm;
 
    const onInputChange = ({ target }) => {
    
        // actualizamos el estado de cada input
        setUserForm({
            ...userForm,
            [target.name]: target.value
        });
    }


    const onSubmit = (event) => {
        event.preventDefault();

        //validamos que nuestros formulario esta completo
        if (!username.trim() || !password.trim() || !email.trim()) {
            alert('Complete los campos del formulario');
            return;
        }

       // guardar el nuevo usuario en el estado de la lista de usuarios;
        handlerAddUser( userForm );

        // limpiamos nuestros estado del formulario al estado inicial;
        setUserForm( initialUserForm );
    }


    //actualiza el estado del formulario cada que le un click en el boton del update
    useEffect(() => {
        setUserForm({... userSelected});
    }, [userSelected])

    return (
        <form onSubmit={ onSubmit }>
            <input
                placeholder="Username" 
                className="form-control my-3 w-75"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                // autoComplete="address-line1 webauthn"
                placeholder="Password"
                className="form-control my-3 w-75"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            <input 
                type="email" 
                placeholder="Email"
                className="form-control my-3 w-75"
                name="email"
                value={ email } 
                onChange={ onInputChange }
            />

            <input type="hidden" name="id" value={id} />

            <button type="submit" className="btn btn-primary">{ id > 0 ? 'Editar Usuario' :  'Crear Usuario'}</button>

            {/* Boton para cerrar formulario de editar */}

            { 
                id > 0 &&
                <button 
                    type="button" 
                    className="btn btn-warning text-white mx-2"
                    onClick={ () => setUserForm( initialUserForm ) }
                >
                    Cerrar
                </button>
            }
        </form>
    );
}