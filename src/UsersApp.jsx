import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

//<- Arreglo de usuarios -> 
const initialUsers = [
    // {
    //     id: 1,
    //     username: 'Alejandro',
    //     password: '12345',
    //     email: 'correo@correo.com'
    // }
];

const UsersApp = () => {

    // manejamos el estado de la lista de usuarios con el useReducer
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [ id, setId ] = useState(0);

    //funcion para agregar un nuevo usuario a la lista, se recibe el user del form
    const handlerAddUser = ( user ) => {
        //actualizamos el id para cada usuario
        setId( id + 1);

        // con el dispatch, servimos al funcion reductora el cual modificara el estado dependiendo de la accion;
        // pasamos un nuevo objeto con el tipo de accion y el nuevo usuario
        dispatch(
            { type: 'addUser', payload: user, id }
        )
    }

    // funcion para eliminar un usuario

    const handlerRemoveUser = (id) => {
        // despachamos para actualizar el estado de la lista de usuarios al eliminarlo
        dispatch(
            {type: 'removeUser', payload: id}
        )
       
    }

    return (
        <div className="container my-4">
            <h1>User App</h1>

            {/* Una fila para los dos componentes */}
            <div className="row">

                <div className="col">
                    <UserForm  handlerAddUser={ handlerAddUser } />
                </div>

                <div className="col">
                    <UsersList users={ users } handlerRemoveUser={ handlerRemoveUser }/>
                </div>
            </div>
        </div>
    );
}

export default UsersApp;