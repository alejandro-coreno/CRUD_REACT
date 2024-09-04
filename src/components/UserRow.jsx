


export const UserRow = ({ id, username, email, handlerRemoveUser }) => {

    // funcion para eliminar
    const onRemoveUser = ( id ) => {
        // pasamos el id para eliminar el usuario
        handlerRemoveUser(id)
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button 
                    className="btn btn-secondary btn-sm" 
                    type="button"
                    >
                        Update
                </button>
            </td>

            <td>
                <button 
                    onClick={ ()  => onRemoveUser(id) } 
                    className="btn btn-danger btn-sm" 
                    type="button"
                    >
                        Remove
                </button>
            </td>
        </tr>
    )
}