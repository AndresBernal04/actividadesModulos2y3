
import { userModel } from "../models/user.model.js"

// Crear, actualizar y eliminar usuarios, poder visualizar todos mis usuarios o un sólo usuario 

// Petición POST para crear productos -> son funciones 
// función declarada -> función flecha

export const postUser = async (request, response) => {
    try {

        // Esta línea de código es para crear usuarios
        const newUser = await userModel.create(request.body) // necesitamos accerder al cuerpo de la petición con requets.body
        return response.status(201).json({
            estado: "201",
            mensaje: "Usuario creado correctamente",
            datos: newUser
        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al crear un usuario",
            datos: error 
        })
    }
}


// Mostrar todos los usuarios
export const getUsers = async (request, response) => {
    return response.send("Funciona la petición GET de todos los usuarios");
}

// Mostrar un sólo usuario
export const getUserById = async (request, response) => {
    return response.send("Funciona la petición GET de un sólo usuario");
}

// Actualizar usuario
export const putUserById = async (request, response) => {
    return response.send("Funciona la petición PUT de los usuarios");
}

// Eliminar usuario
export const deleteUserById = async (request, response) => {
    return response.send("Funciona la petición DELETE de los usuarios");
}