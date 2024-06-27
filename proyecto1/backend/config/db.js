// Es el módulo que hace la conexión con la base de datos

// 1. Importar las dependencias necesarias
import mongoose from "mongoose";

const connectionMongo = async () => {

    // conexion de base de datos
    await mongoose.connect(process.env.CONEXION_DB,{})

    // control de errores -> bloque try - catch
    try{
        console.log("Conexión exitosa con la base de datos")
    }catch(error){
        console.error("Error de conexión: ", error.message)
    }
}

export default connectionMongo;