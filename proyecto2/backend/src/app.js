// Configuración del servidor
// 1. Importar dependencias y módulos
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionMongo } from "./config/dataBase.js"; //Ponerle el .js después de dataBase
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";

// 2. Hacer las configuraciones necesarias en el proyecto
const app = express();
dotenv.config();
// cors -> middlewares -> intermediarios en el código (mesero)
app.use(cors());

const port = process.env.PORT || 9000;
// Condicional ternario
// const port = process.env.PORT ? process.env.PORT : 6000;

connectionMongo();
// El use siempre se utiliza con middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port, ()=>{
    console.log(`El puerto se está escuchando en: http://localhost:${port}`)
});

