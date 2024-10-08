import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

// pasamos por props el objeto login y la funcion de salir 
export const Navbar = () => {

     
    // obtenemos la data del AuthProvider del hook useContext
    const { login, handlerLogout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Users</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users/register">Registrar Usuario</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span className="nav-item nav-link text-primary mx-3">{login.user?.username}</span>
                    <button 
                        type="button" 
                        className="btn btn-outline-success"
                        onClick={ handlerLogout }
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

