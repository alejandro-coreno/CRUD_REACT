// hook personalizado para los usuarios, para poder separar la logica del componente y reutilizarla
import { useState, useReducer } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
//<- Arreglo de usuarios -> 
const initialUsers = [
    {
        id: 1,
        username: 'Alejandro',
        password: '12345',
        email: 'correo@correo.com'
    }
];

// objeto para cada input inicializado
const initialUserForm =  {
    id: 0,
    username: '',
    password: '',
    email: ''
}


export const useUsers = () => {
    
    // manejamos el estado de la lista de usuarios con el useReducer
    const [users, dispatch] = useReducer( usersReducer, initialUsers );

    // estado para actualizar los valores de cada usuario
    const [userSelected, setUserSelected] = useState(initialUserForm);

     //funcion para agregar un nuevo usuario a la lista, se recibe el user del form
     const handlerAddUser = ( user ) => {
        
        // validamos si no esta el usuario, y dependiendo de la accion cambiara el estado

        let type;

        if (user.id === 0) {

            type = 'addUser'
            // con el dispatch, servimos al funcion reductora el cual modificara el estado dependiendo de la accion;
            // pasamos un nuevo objeto con el tipo de accion y el nuevo usuari
        }

        else {
            type = 'updateUser'
            
        }
        dispatch({ 
            type, 
            payload: user
        });

        //alerta de exito
        Swal.fire({
            title: (user.id === 0) ? "Usuario Creado" : "Usuario Actulizado",
            text: (user.id === 0) ? "¡El usuario ha sido creado con exito!" : "¡El usuario ha sido actualizado con exito!",
            icon: "success"
        });
    }

    // funcion para eliminar un usuario
    const handlerRemoveUser = (id) => {
        
        Swal.fire({
            title: "¿Esta seguro que desea eliminar el usuario?",
            icon: "warning",
            width: 'auto',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SI!",
          }).then((result) => {
            if (result.isConfirmed) {
                // despachamos para actualizar el estado de la lista de usuarios al eliminarlo
                dispatch({
                    type: 'removeUser', 
                    payload: id
                });
                
                Swal.fire({
                    title: "¡Usuario Eliminado!",
                    text: "!El usuario ha sido eliminado con exito!",
                    icon: "success"
                });
            }
        });
    
    }

    // funcion para actualizar un usuario
    const handlerUserSelectedForm = ( user ) => {
        // realizamos un clon de la instancia user para guardarloe en nuestro state
        setUserSelected({...user});
    }
 
    // retornamos nuestros metodos o atributos del hook para ser desectructurados
    return {
        users,
        userSelected,
        initialUserForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    }
}