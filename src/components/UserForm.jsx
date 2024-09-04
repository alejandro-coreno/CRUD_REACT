import { useState } from "react"


// objeto para cada input inicializado
const initialUserForm =  {
    username: '',
    password: '',
    email: ''
}

export const UserForm = () => {

    const [userForm, setUserForm] = useState( initialUserForm );

    // desestructuramos nuestros valores iniciales del estado del formulario
    const { username, password, email } = userForm;
 
    const onInputChange = ({ target }) => {
    
        // actualizamos el estado de cada input
        setUserForm({
            ...userForm,
            [target.name]: target.value
        })
    }


    const onSubmit = (event) => {
        event.preventDefault();

        //validamos que nuestros formulario esta completo
        if (!username.trim() || !password.trim() || !email.trim()) {
            alert('Complete los campos del formulario');
            return;
        }

        //guardar en el estado de la lista de usuaurio el nuevo
        console.log( userForm );
        // limpiamos nuestros estado del formulario
        setUserForm( initialUserForm );
    }

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

            <button type="submit" className="btn btn-primary">Crear</button>
        </form>
    )
}