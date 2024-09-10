import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: ''
}

// creamos la pagina de inicio que muestra el login
export const LoginPage = () => {

    const [loginForm, setLoginForm] = useState( initialLoginForm );

    //desestructuramos los valores del useState para cada valor del input
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (! username.trim() || !password.trim()) {
            Swal.fire({
                title: "Error de validación",
                text: "Username y Password requeridos, error",
                icon: "error"
            });
            return;
        }
        //implementamos un login
        if (username === 'admin' && password === '12345') {
            // handlerLogin
        }
        else {
            Swal.fire({
                title: "Error Login",
                text: "Username || Password invalidos, error",
                icon: "error"
            });
        }
        setLoginForm( initialLoginForm );
    } 

    return (
        <div className="modal" style={{display: 'block'}} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>

                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input 
                                type="text" 
                                name="username" 
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                value={ username }
                                onChange={ onInputChange }  
                            />

                            <input 
                                type="password" 
                                name="password" 
                                className="form-control my-3 w-75"
                                placeholder="Password" 
                                value={ password }
                                onChange={ onInputChange } 
                            />
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}