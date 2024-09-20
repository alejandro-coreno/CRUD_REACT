import { useContext } from "react";
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext";


export const UsersList = () => {

    //obtenemos informacion del useContext
    const { users } = useContext( UserContext );

    return (
        <> 
            {
                users.length > 0 
                
                ?
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th># ID</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Update route</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Iteramos cada componente y le pasamos por props el id, username, email */}
                            {
                                users.map( ( { id, username, email, password }) => (
                                    <UserRow 
                                        key={id}
                                        id={id} 
                                        username={ username}
                                        email={ email }
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