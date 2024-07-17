// Configuración del servidor
// 1. Importar dependencias y módulos
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// 2. Hacer las configuraciones necesarias en el proyecto
const app = express();
dotenv.config();
// cors -> middlewares -> intermediarios en el código (mesero)
app.use(cors());

const port = 6000;

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port, ()=>{
    console.log(`El puerto se está escuchando en: http://localhost:${port}`)
});

