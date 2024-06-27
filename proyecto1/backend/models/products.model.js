
// Importamos mongoose -> Schema -> plantilla de los productos 
import mongoose from "mongoose";    

const schema = mongoose.Schema;

// Estructurando cómo se va a guardar la información de los productos en nuestra db
// Schema es la plantilla
const productSchema = new schema({
    nombre: {
        type: String,
        require: true
    },

    imagen: {
        type: String,
    },

    precio: {
        type: Number,
        require: true
    }
});

// Utilizamos la plantilla para crear nuestro modelo -> creamos lacolección donde se van a guardar los datos

// El mongoose.model() se utiliza para crear nuestro modelo
// 1. El nombre de la colección que nos va a guardar los datos
// 2. Necesitamos darle como parámetro el schema que hicimos
export const productModel = mongoose.model("usuario", productSchema); 

