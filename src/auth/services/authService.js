// servicio que se encarga de validar la logica del login y poder reutilizar los metodos


// validamos que nuestro username y password sean correctos y retornamos true o false
export const loginUser = ( userLogin ) => {
    return userLogin.username === 'admin' && userLogin.password === '1234'
}