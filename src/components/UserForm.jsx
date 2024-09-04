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
        const { name, value } = target;

        // actualizamos el estado de cada input
        setUserForm({
            ...initialUserForm,
            [name]: value
        });
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Username" 
                className="form-control my-3 w-75"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                placeholder="Password"
                className="form-control my-3 w-75"
                name="password"
                value={ password }
                onChange={ onInputChange}
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