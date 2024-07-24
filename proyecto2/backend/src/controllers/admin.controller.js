
import {adminModel} from "../models.admin.model.js";
// Crear y mostrar todos, y eliminar


// Petición POST para crear administrador
export const postAdmin = async (request, response) => {
    return response.send("Funciona la petición POST de los admin");
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    return response.send("Funciona la petición GET de todos los admin");
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    return response.send("Funciona la petición DELETE de un sólo admin");
}