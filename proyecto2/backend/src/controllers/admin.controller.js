
import {adminModel} from "../models/admin.model.js";
// Crear y mostrar todos, y eliminar


// Petición POST para crear administrador
export const postAdmin = async (request, response) => {
    try {

        const {nombreCompleto, correo, contrasena} = request.body;

        const newAdmin = await adminModel.create({
            nombreCompleto,
            correo,
            contrasena,
            categoriaAdmin: true
        }) 

        return response.status(201).json({
            estado: "201",
            mensaje: "Administrador creado correctamente",
            datos: newAdmin
        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al crear un adminitrador",
            datos: error 
        })
    }
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    return response.send("Funciona la petición GET de todos los admin");
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    return response.send("Funciona la petición DELETE de un sólo admin");
}