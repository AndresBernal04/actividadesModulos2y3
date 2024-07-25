// express -> estructuración y creación de las rutas -> Router() -> permite crear las rutas -> endpoints
import {Router} from "express"
import { getUserById, getUsers, postUser, putUserById, deleteUserById } from "../controllers/user.controller.js";

//// Otra forma de importar
// import controller from "../controllers/user.controller.js"
// controller.getUserById
// controller.getUsers
// controller.deleteUserById
// controller.postUser

// Para que express sepa que lo voy a usar
const userRouter = Router();

// Son peticiones que vienen de métodos de express -> userRouter.get - userRouter.post, etc.
userRouter.get("/:id", getUserById); //Ruta para mostrar usuario por id
userRouter.get("/", getUsers); //Ruta para mostrar todos los usuarios
userRouter.post("/", postUser) //Ruta para crear usuarios
userRouter.put("/:id", putUserById) //Ruta para actualizar usuario por id
userRouter.delete("/:id", deleteUserById) //Ruta para eliminar usuario por id

export default userRouter; //Se exporta porque es quién contiene todas mis rutas