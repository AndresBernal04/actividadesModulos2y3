
// Importar dependencias que voy a necesitar
import { userModel } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/jwt.js';


// Uso una función para validación de usuario y la generación de token

export const loginService = async (req, res) => {

    try {
        // Estas son las credenciales que ingresamos en el formulario de ingreso y vamos a verificar que estén en la base de datos
    const {email, password} = req.body;
    // Buscar en la base de datos si existe es email

    const userFound = await userModel.findOne({
        correo: email
    })

    // Validación en caso de que no se encuentren usuarios con ese email
    if(!userFound){
        return res.status(404).json({
            estado: "404",
            mensaje: "Usuario no encontrado, por favor registrarse"
        })
    }

    // Comparamos password con la contraseña guardada con la base de datos
    // Comapramos 1. la contraseña que ingresa y 2. la contraseña guardada en la base de datos
    const isValidPassword = await bcrypt.compare(password, userFound.contrasena);

    // Validar si la contraseña es correcta
    if(!isValidPassword){
        return res.status(400).json({
            estado: "400",
            mensaje: "Error al iniciar sesión, contraseña incorrecta"
        })
    }

    // -------------------- AUTENTICACIÓN ------------------------- //

    // Crear nuestro payload -> información del usuario que pasamos para crar el token
    // Los datos son de mi usuario encontrado que lo estoy guardando en userFound
    const payload = {
        id: userFound._id,
        name: userFound.nombreCompleto,
    }

    // Validar si mi usuario ingresado es administrador
    if(userFound.categoriaAdmin){
        payload.isAdmin = true;
    }

    // GENERAR EL TOKEN
    const token = await generateToken(payload);

    // Si se inició sesión correctamente, con credenciales correctas y se creó un token
    return res.status(200).json({
        estado: "200",
        mensaje: "Inicio de sesión exitoso",
        tokenGenerado: token
    });

    } catch (error) {
        return res.status(400).json({
            estado: "400",
            mensaje: "Hubo un error al iniciar sesión",
            error: error
        });
    }
}

