// 1. Importar los módulos o dependencias que necesitemos
import { productModel } from "../models/products.model.js";


// Prueba inicial de mis controladores 

// Petición GET -> me muestra los productos
export const getProducts = async(req, res) => {

    // Manejo errores -> Se debe enviar una respuesta, vaya todo bien o no
    try{
        
        // products = [producto1, producto2, producto3, ...] lenght === 0
        let products = await productModel.find();

        // Validación en el caso que no hayan productos
        if(products.length === 0){
            // 404 -> not found -> no se encontró lo que se estaba buscando
            return res.status(404).json({message: "No se encontraron productos."});
        }

        // 200 -> Todo ok
        return res.status(200).send(products);

    } catch(error){
        // 500 -> error inesperado en el servidor 
        return res.status(500).json({message: "Error del servidor." + error.message});
    }
}



// Petición POST -> me crea los productos uno por uno
export const postProducts = async(req, res) => {
    // body -> contenido de mi petición -> los datos que se le da para que se pueda crear el nuevo producto
    const {nombre, imagen, precio } = req.body; 

    // Validación de que se hayan ingresado todos los datos
    if(!nombre || !imagen || !precio) {
        return res.status(400).json({message: "Debe ingresar todos los campos requeridos: nombre, imagen y precio."});
    }

    try{
        const newProduct = await productModel.create(req.body);

        // 201 -> Se creó correctamente
        return res.status(201).json(newProduct);

    }catch(error){

        // 500 -> error inesperado en el servidor 
        return res.status(500).json({message: "Error del servidor." + error.message});
    }
}



// Petición DELETE -> me elimina los productos por ID
export const deleteProductById = async(req, res) => {
    return res.send("Funciona la petición DELETE");
}

// Petición PUT -> me actualiza los productos por ID
export const putProductById = async(req, res) => {

    try{
        // Acceder a nuestro parámetro _id
        let idForUpdate = req.params._id;
        // Acceder al cuerpo de nuestra petición
        // 1. Le indica el id, y luego el cuerpo de su petición
        let productUpdate = await productModel.findByIdAndUpdate(idForUpdate, req.body);

        // Validación cuando no encontramos el producto solicitado 
        if(!productUpdate){
            return res.status(404).json({message : "Lo siento, no se encontró producto para modificar."});
        }

        return res.status(200).json({message: "Producto actualizaco correctamente"});


    }catch(error){

        // 500 -> error inesperado en el servidor 
        return res.status(500).json({message: "Error del servidor." + error.message});
    }
}

