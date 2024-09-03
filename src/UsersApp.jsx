import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

const UsersApp = () => {
    // Arreglo de usuarios

    const initialUsers = [
        {
            id: 1,
            username: 'Alejandro',
            password: '12345',
            email: 'correo@correo.com'
        }
    ]

    return (
        <div className="container my-4">
            <h1>User App</h1>

            {/* Una fila para los dos componentes */}
            <div className="row">

                <div className="col">
                    <UserForm />
                </div>

                <div className="col">
                    <UsersList/>
                </div>
            </div>
        </div>
    );
}

export default UsersApp;