
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
    try {

        const allAdmins = await adminModel.find() 
        // find -> para encontrar datos de la DB 
        // find -> es un método
        // allUser es un arreglo

        // Verificar que hayan datos para encontrar
        // Validar si no hay usuarios
        if(allAdmins.length === 0){
            
            return response.status(200).json({
                estado: "200",
                mensaje: "No se encontraron administradores en la base de datos",
                datos: null
            })
        }

        return response.status(200).json({
            estado: "200",
            mensaje: "Estos son todos los administradores encontrados",
            cantidadAdmins: allAdmins.length,
            admins: allAdmins //Aquí muestra todo lo que haya encontrado 

        })


    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al buscar los administradores",
            datos: error 
        })
    }
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    // TAREA DE ELIMINAR ADMINS
}