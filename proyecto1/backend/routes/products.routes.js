
// Importaciones 

import express from "express"
// Importamos nuestros controladores
import { getProducts, postProducts, deleteProductById, putProductById } from "../controllers/products.controllers.js";

// Configuramos el router de express
const productsRouter = express.Router();

// Definimos nuestras rutas


// Ruta para la petición GET
// Primero, determino la ruta y luego, lñe digo que es lo que tiene que hacer
productsRouter.get("/obtenerProductos", getProducts);

// Ruta para la petición POST
productsRouter.post("/registrarProducto", postProducts);

// Ruta para la petición DELETE
productsRouter.delete("/eliminarProducto/:_id", deleteProductById);

// Ruta para la petición PUT
productsRouter.put("/actualizarProducto/:_id", putProductById);


// Exportar rutas
export default productsRouter;