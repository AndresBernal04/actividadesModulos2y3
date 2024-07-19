// 1. Importación dependencias y módulos
import mongoose from "mongoose";
import { userModel } from "./user.model.js"; // Poner el .js al final (model.js)

const adminSchema = new mongoose.Schema({
    categoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

// mongoose -> método "discriminator" -> nos va a permitir crear un modelo de Admin a partir de otro modelo, User 

export const adminModel = userModel.discriminator("Admin", adminSchema)