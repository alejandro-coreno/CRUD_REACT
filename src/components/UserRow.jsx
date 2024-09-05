

export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUserSelectedForm, password }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button 
                    // pasamos el objeto con cada valor para actulizar el usuario
                    onClick={() => handlerUserSelectedForm({id, username, email, password})}
                    className="btn btn-secondary btn-sm" 
                    type="button"
                    >
                        Update
                </button>
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