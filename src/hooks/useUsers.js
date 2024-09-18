// hook personalizado para los usuarios, para poder separar la logica del componente y reutilizarla
import { useState, useReducer } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
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
    const [userSelected, setUserSelected] = useState( initialUserForm );

    // estado para el ser visible el formulario
    const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();

    //funcion para agregar un nuevo usuario a la lista, se recibe el user del form
    const handlerAddUser = ( user ) => {

        // con el dispatch, servimos al funcion reductora el cual modificara el estado dependiendo de la accion;
        // pasamos un nuevo objeto con el tipo de accion y el nuevo usuario
        dispatch({ 
            // validamos si no esta el usuario, y dependiendo de la accion cambiara el estado
            type: (user.id === 0) ? 'addUser' : 'updateUser', 
            payload: user
        });

        //alerta de exito
        Swal.fire({
            title: (user.id === 0) ? "Usuario Creado" : "Usuario Actualizado",
            text: (user.id === 0) ? "¡El usuario ha sido creado con exito!" : "¡El usuario ha sido actualizado con exito!",
            icon: "success"
        });

        handlerCloseForm();

        // redirigimos al usuario a la ruta /users cada que se agrgegue un usuario
        navigate('/users');
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
        setUserSelected({ ...user });
        setVisibleForm( !visibleForm );
    }

    // funcion para abrir el formulario
    const handlerOpenForm = () => {
        setVisibleForm( !visibleForm );
    }

    const handlerCloseForm = () => {
        setVisibleForm(!visibleForm);
        setUserSelected(initialUserForm);
    }
 
    // retornamos nuestros metodos y atributos del hook para ser desectructurados
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }
}