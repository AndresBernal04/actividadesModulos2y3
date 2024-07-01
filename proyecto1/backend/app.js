// Es el cerebro del proyecto, activamos todas las funciones que necesitamos de nuestro proyecto. Es el aplicativo.



// 1. Importar las dependencias y código que necesitamos
import express from "express";
import dotenv from "dotenv";
// Variables de entorno -> nos guardan información delicada o sensible
import connectionMongo from "./config/db.js";
import productsRouter from "./routes/products.routes.js";




// 2. Confirgurar el uso de nuestro servidor y de nuestras variables de entorno

const app = express(); //Configuramos nuestro servidor
dotenv.config(); //Configuramos nuestras variables de entorno
const port = process.env.PORT;


// conéctese a la base de datos
connectionMongo();

// middeleware -> intermediario entre el servidor y las peticiones
// Para que se puedan leer y enviar datos en formato json
app.use(express.json());

// Usamos las rutas
app.use("/", productsRouter);



// // Prueba
// app.get("/",(req, res)=>{
//     res.send("Holaaa, esto es una petición a mi servidor");
// });






// 3. Escuchar nuestro servidor (ejecutar)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});






