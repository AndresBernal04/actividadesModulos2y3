// 1. Importar los módulos o dependencias que necesitemos
import { productModel } from "../models/products.model.js";


// Prueba inicial de mis controladores 

// Petición GET -> me muestra los productos
export const getProducts = async(req, res) => {
    return res.send("Funciona la petición GET");
}


// Petición POST -> me crea los productos uno por uno
export const postProducts = async(req, res) => {
    return res.send("Funciona la petición POST");
}

// Petición DELETE -> me elimina los productos por ID
export const deleteProductById = async(req, res) => {
    return res.send("Funciona la petición DELETE");
}

// Petición PUT -> me actualiza los productos por ID
export const putProductById = async(req, res) => {
    return res.send("Funciona la petición PUT");
}

