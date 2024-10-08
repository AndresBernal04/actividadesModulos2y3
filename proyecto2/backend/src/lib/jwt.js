
// JSON WEB TOKEN

// 1. Importar dependencias (JWT)
import jwt from "jsonwebtoken";

// 2. Configurar cuál será nuestra clave secreta
const secretKey = process.env.JWT_SECRET;

// 3. Estructurar las funciones para generar y verificar JWT
export function generateToken (payload) {
    // Nosotros vamos a configurar de una vez esta función para que sea asincrónica
    // new Promise es un método
    return new Promise((resolve, reject) => {
        // Para generarlo necesitamos payload, clave secreta y tiempo de expiración
        // Además, le voy a decir cómo debe trabajar con los errores y aciertos
        jwt.sign(payload, secretKey, {expiresIn: '1h'}, (error, token) => {
            // Validar si hay error al generar token
            if(error){
                // Le decimos que pasa si todo sale mal
                reject(new Error("Error al generar JWT", error.message))
            } else{
                // Le decimos qué pasa si todo bien
                resolve(token);
            }
        });
    }); 
}


// Función para verificar tokens (JWT)
export function verifyToken () {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            // Validando decodificación
            if(error){
                // Le decimos que pasa si todo sale mal
                reject(new Error("Error al generar JWT", error.message))
            } else{
                // Lde decimos qué pasa si todo bien
                resolve(decoded);
            }
        })
    });
}

 

