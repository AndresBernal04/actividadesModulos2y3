// En typescript -> tenemos algo que se llama observador/observable -> nos permite que se esté ejecutando el código todo el tiempo -----> "tsc --watch archivo.ts"
// En JS ----> 'node --watch archivo.js'
console.log("Hola, soy typescript ;).");
// INFERENCIA DE TIPOS 
// Sí importan los tipos de variable
// Asume que esa variable sólo recibe el tipo de datos que guardó por primera vez
var miVariable = "abc";
miVariable = "Andrés";
var miNumero = 20;
miNumero = 25;
// Declaración explícita 
var miNumero2;
// Asignar un valor respetando el tipo declarado
miNumero2 = 7.25;
// console.log(miNumero2);
// TIPOS DE DATOS EN TS
// DATOS PRIMITIVOS -> Básicos (string, numbers, boolean, undefines, null)
// Numéricos (-2, 2, 2.5, ...)
var numero;
// String (texto)
var texto;
// Booleanos (true, false)
var buleano;
// Indefinidos 
var indefinido;
// Nulo
var nulo;
numero = 2;
texto = "Hola";
buleano = false;
indefinido = undefined;
nulo = null;
// TIPOS DE DATOS ESPECIALES
// Arrays, objetos, any, unknown -> desconocidos
var arreglo = [1, 2, 3];
// Declaración explícita de arreglo
// Forma 1 de declarar tipos de datos en los arreglos
var arreglo2;
var arreglo3;
var arreglo4;
arreglo = [10, 20, 30];
arreglo2 = [100, 200, 300];
arreglo3 = ["Andrés", "Andrés", "Andrés"];
arreglo4 = [true, false];
// Forma 2 de declarar tipos de datos en los arreglos
var miArreglo;
miArreglo = ["Luisa", "Andrés"];
// Objetos - unknown - any - funciones
// Nuestras variables reciben datos de cualqueir tipo
// No es tan usado 
var desconocido; // unknown -> Se recibe cualquier tipo de dato, porque no se sabe qué va a llegar
var cualquiera; // any -> No importa el tipo de dato que llegue, guárdemelo
desconocido = "Luisa";
desconocido = 4;
desconocido = [true, false];
cualquiera = false;
cualquiera = undefined;
cualquiera = null;
// OBJETOS
var miObjeto; //Puede ser: [] o {}
// Declaración explícita de un objeto literal
// Asingnación con = -> valores
// Declaración con : -> tipo
var miObjetoCarro;
miObjetoCarro = {
    id: 1,
    marca: "BMW",
    color: "red",
    vendido: true
};
// FUNCIONES
// Las funciones pueden devolver valores o puede que no devuelvan nada
var retorno;
// void -> Para que una función no devuelva nada
function miFuncion1() {
    console.log("Soy función 1");
}
// Ejecute
miFuncion1();
// Guárdese en una variable
// retorno = miFuncion1();
// A mi variable le puedo dar parámetros a los cueales le asigno tipos
// Funcion flecha =>, puede que retorne o no retorne
var miFuncion2 = function (num1, num2) {
    return num1 * num2;
};
// Además le puedo especificar el tipo de la respuesta que me va a dar
function miFuncion3(num1, num2) {
    return num1 + num2;
}
retorno = miFuncion3(5, 4);
console.log(retorno);
