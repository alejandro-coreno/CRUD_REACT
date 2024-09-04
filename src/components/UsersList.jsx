import { UserRow } from "./UserRow"


export const UsersList = ({ handlerRemoveUser,  users = [] }) => {
    return (
        <> 
            {
                users.length > 0 
                
                ?
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Iteramos cada componente y le pasamos por props el id, username, email */}
                            {
                                users.map( ( { id, username, email }) => (
                                    <UserRow 
                                        key={id}
                                        id={id} 
                                        username={ username}
                                        email={ email }
                                        handlerRemoveUser={ handlerRemoveUser }
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                
                :

                <div className="alert alert-warning">!No hay usuarios!</div>
            }
        
        </>
    );
}