import { AuthContext } from "./AuthContext"
import { useAuth } from "../hooks/useAuth";


export const AuthProvider = ({ children }) => {


    // desestructuramos nuestros atributos y metodos del custom hook
    const { login, handlerLogout, handlerLogin} = useAuth();


    return (
        <AuthContext.Provider value={{
            login,
            handlerLogout,
            handlerLogin
        }}>
            { children }
        </AuthContext.Provider>
    );
}