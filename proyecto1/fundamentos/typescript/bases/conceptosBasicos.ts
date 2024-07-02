// En typescript -> tenemos algo que se llama observador/observable -> nos permite que se esté ejecutando el código todo el tiempo -----> "tsc --watch archivo.ts"

// En JS ----> 'node --watch archivo.js'

console.log("Hola, soy typescript ;).");

// INFERENCIA DE TIPOS 
// Sí importan los tipos de variable
// Asume que esa variable sólo recibe el tipo de datos que guardó por primera vez
let miVariable = "abc"; 
miVariable = "Andrés";

let miNumero = 20; 
miNumero = 25;

// Declaración explícita 
let miNumero2: number;
// Asignar un valor respetando el tipo declarado
miNumero2 = 7.25;
// console.log(miNumero2);



// TIPOS DE DATOS EN TS

// DATOS PRIMITIVOS -> Básicos (string, numbers, boolean, undefines, null)

// Numéricos (-2, 2, 2.5, ...)
let numero : number;
// String (texto)
let texto : string;
// Booleanos (true, false)
let buleano : boolean;
// Indefinidos 
let indefinido : undefined;
// Nulo
let nulo : null;

numero = 2;
texto = "Hola";
buleano = false;
indefinido = undefined;
nulo = null;


// TIPOS DE DATOS ESPECIALES
// Arrays, objetos, any, unknown -> desconocidos

let arreglo = [1, 2, 3];

// Declaración explícita de arreglo
// Forma 1 de declarar tipos de datos en los arreglos
let arreglo2 : Array<number>;
let arreglo3 : Array<string>;
let arreglo4 : Array<boolean>;

arreglo = [10, 20, 30];
arreglo2 = [100, 200, 300];
arreglo3 = ["Andrés", "Andrés", "Andrés"];
arreglo4 = [true, false];


// Forma 2 de declarar tipos de datos en los arreglos
let miArreglo : string[];
miArreglo = ["Luisa", "Andrés"]


// Objetos - unknown - any - funciones
// Nuestras variables reciben datos de cualqueir tipo
// No es tan usado 
let desconocido : unknown; // unknown -> Se recibe cualquier tipo de dato, porque no se sabe qué va a llegar
let cualquiera : any; // any -> No importa el tipo de dato que llegue, guárdemelo

desconocido = "Luisa";
desconocido = 4;
desconocido = [true, false];

cualquiera = false;
cualquiera = undefined;
cualquiera = null;

// OBJETOS
let miObjeto : object; //Puede ser: [] o {}

// Declaración explícita de un objeto literal
// Asingnación con = -> valores
// Declaración con : -> tipo

let miObjetoCarro : {
    id: number;
    marca: string;
    color?: string; //ref no se sabe si ese elemento se va a dar o no
    vendido: boolean
};

miObjetoCarro = {
    id : 1,
    marca : "BMW",
    color : "red",
    vendido : true
}


// FUNCIONES
// Las funciones pueden devolver valores o puede que no devuelvan nada
// Pueden devolver datos de tipo number, string, boolean, object
// Las que no devuelven nada -> :void -> sólo me ejecuto


let retorno : any;

// void -> Para que una función no devuelva nada
function miFuncion1() : void{
    console.log("Soy función 1");
}

// Ejecute
miFuncion1();
// Guárdese en una variable
// retorno = miFuncion1(); -> nos retorna indefinido


// A mi variable le puedo dar parámetros a los cueales le asigno tipos
// Funcion flecha =>, puede que retorne o no retorne
const miFuncion2 = (num1 : number, num2 : number) => {
    return num1 * num2;
}



// Además le puedo especificar el tipo de la respuesta que me va a dar
function miFuncion3 (num1 : number, num2 : number) : number {
    return num1 + num2;
}

retorno = miFuncion3(5,4);
console.log(retorno);