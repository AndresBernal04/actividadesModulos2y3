
import { userModel } from "../models/user.model.js"
import bcrypt from 'bcryptjs';


// Crear, actualizar y eliminar usuarios, poder visualizar todos mis usuarios o un sólo usuario 

// Petición POST para crear productos -> son funciones 
// función declarada -> función flecha

export const postUser = async (request, response) => {

    // try - catch es el manejo de errores
    try {

        // Esta línea de código es para crear usuarios
        const {nombreCompleto, correo, contrasena, imagen } = request.body;
        const codedPasswordUser = await bcrypt.hash(contrasena, 10);

        const newUser = await userModel.create({
            nombreCompleto,
            correo,
            contrasena: codedPasswordUser
        });
        // .save -> en vez de create puede guardar
        // necesitamos accerder al cuerpo de la petición con requets.body
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
    try {

        const allUsers = await userModel.find() 
        // find -> para encontrar datos de la DB 
        // find -> es un método
        // allUser es un arreglo

        // Verificar que hayan datos para encontrar
        // Validar si no hay usuarios
        if(allUsers.length === 0){
            
            return response.status(200).json({
                estado: "200",
                mensaje: "No se encontraron usuarios en la base de datos",
                datos: null
            })
        }

        return response.status(200).json({
            estado: "200",
            mensaje: "Estos son todos los usuarios encontrados",
            cantidadUsuarios: allUsers.length,
            usuarios: allUsers //Aquí muestra todo lo que haya encontrado 

        })


    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al buscar los usuario",
            datos: error 
        })
    }
}


// Mostrar un sólo usuario
export const getUserById = async (request, response) => {

    try {
        // Establecer cuál es el parámetro por el que lo va a buscar, ej -> nombre completo, _id, etc
        let idForGet = request.params.id;
        // validar id 
        if(idForGet === ':id'){
            return response.json({
                mensaje: 'Debe infresar un id válido',
                id: idForGet
            })
        }

        // -> encontrar -> find()
        const userById = await userModel.findById(idForGet); // Se ejecuta con los ()
        // Validación cuando no se encuentra el usuario buscado
        if(!userById){ // ! -> Se usa para negar, en este caso, si no encuentra userById
            return response.status(200).json({
                estado: "200",
                mensaje: "No se encontró ese usuario"
            })
        }

        return response.status(200).json({
            estado: "200",
            mensaje: "Se encontró el usuario buscado",
            // usuario: userById.nombreCompleto, para buscar por nombre completo
            // usuario: userById.correo, para buscar por correo
            usuario: userById // para buscar el usuario por id
        })


        
        
    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al buscar un sólo usuario",
            datos: error 
        })
    }
}



// Actualizar usuario
export const putUserById = async (request, response) => {
    try {
        let idForPut = request.params.id;
        const dataForUpdate = request.body;
        const userUpdated = await userModel.findByIdAndUpdate(idForPut);
        
        // TAREITA: AGREGUE VALIDACIONES QUE CONSIDERE NECESARIAS 

        return response.status(200).json({
            estado: "200",
            mensaje: "Se actualizó correctamente",
            datos: userUpdated
        })


    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al actualizar el usuario",
            datos: error 
        })
    }
}


// Eliminar usuario
export const deleteUserById = async (request, response) => {
    try {
        let idForDelete = request.params.id;
        const userDeleted = await userModel.findByIdAndDelete(idForDelete);

        // TAREITA: AGREGUE VALIDACIONES QUE CONSIDERE NECESARIAS 

        return response.status(200).json({
            estado: "200",
            mensaje: "Se eliminó correctamente",
            datos: userDeleted
        })


    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al eliminar el usuario",
            datos: error 
        })
    }
}