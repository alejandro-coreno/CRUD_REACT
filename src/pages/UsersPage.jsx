import { useContext } from "react";
import { UsersList } from "../components/UsersList";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/UserContext";

const UsersPage = () => {

    const { visibleForm, handlerOpenForm } = useContext(UserContext);

    return (
        <>
            
            {
                !visibleForm || 

                <UserModalForm />
            }

            {/* Tabla de lista de usuarios */}
            <div className="container my-4">
                <h1>User App</h1>

                {/* Una fila para el componente de lista de usuarios */}
                <div className="row">                
                   
                    <div className="col">
                        {
                            visibleForm || 
                            <button 
                                type="button" 
                                className="btn btn-primary my-2"
                                // funcion para abrir el formulario
                                onClick={ handlerOpenForm }
                            >
                                Nuevo Usuario
                            </button>
                        }

                        <UsersList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersPage;