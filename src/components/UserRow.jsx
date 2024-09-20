import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const UserRow = ({ id, username, email }) => {

    // obtenemos informacion del contexto
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext( UserContext );
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button 
                    // pasamos el objeto con cada valor para actulizar el usuario
                    onClick={() => handlerUserSelectedForm({id, username, email})}
                    className="btn btn-secondary btn-sm" 
                    type="button"
                    >
                        Update
                </button>
            </td>

            <td>
                <NavLink className="btn btn-secondary btn-sm" to={`/users/edit/${id}`}>Update route</NavLink>
            </td>

            <td>
                <button 
                    onClick={ ()  => handlerRemoveUser(id) } 
                    className="btn btn-danger btn-sm" 
                    type="button"
                    >
                        Remove
                </button>
            </td>
            
        </tr>
    )
}

