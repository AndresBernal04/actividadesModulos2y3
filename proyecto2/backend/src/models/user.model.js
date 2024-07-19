// 1. Importacion de dependencias y módulos
import mongoose from "mongoose";
// Importamos mongoose para crear el esquema -> el esquema es un método de mongoose -> modelos (mongoose)


// new -> contructor -> nos permite usar una plantilla para crear schema
const userSchema = new mongoose.Schema({
    nombreCompleto:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true,
        unique: true
    },

    contrasena:{
        type: String,
        required: true
    },

    imagen:{
        type: String,
    }
});

// require -> una dependencia
// required -> un atributo de mi esquema -> ese dato debe ser asignado


// () -> funciones
// {} -> objetos -> atributo y valor 

export const userModel = mongoose.model("usuario", userSchema);