// vamos a aprender js para fullstack quiero aprender esto para poder hacer aplicaciones depues poder integrar todo lo aprendido con todo lo que me gusta porque me gusta el desarrollo de aplicaciones "Cuando me sienta desmotivado tengo que pensar que no todos los caminos son faciles lo que te gusta toma tiempo y sacrificio quiero empezar esta nueva etapa y hacerlo de una manera espectacular y ser el mejor en lo que hago"


//variables y tipos de datos

/* tenemos tres maneras de declarar variables
1. let (es una variable que se puede cambiar en el codigo)
2. const (es una variable constante)
3. var (no es recomendado usarlo ya que se puede acceder a la variable desde cualquier parte del codigo)

recordar que las variables se declaran en lowerCamelCase (la primera palabra en minuscula y las siguientes en mayuscula)
*/


//ejemplo de let
let nombre = "Martin";
//no es necesario declarar el tipo de dato ya que js es un lenguaje debilmente tipado ademas no es necesario poner punto y coma al final de la linea

//ejemplo de const

const apellido = "Perez"

//ejemplo de var
var edad = 20


/* tipos de datos en JS

tenemos datos primitivos y objetos

primitivos: string, number, boolean, bigint, symbol, null, undefined
objetos: object, array, function

*/


//ejemplo

let numero = 10;      // Number
let texto = "Hola";   // String
let esActivo = true;  // Boolean
let usuario = { nombre: "Martin", edad: 25 };  // Objeto
let lista = [1, 2, 3, 4];  // Array


/* 🔹 Operadores y Estructuras de Control
Operadores: +, -, *, /, %, **
Comparaciones: ==, ===, !=, !==, >, <, >=, <=
Lógicos: &&, ||, !

*/

// condicionales

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


// bucles

for (let i = 0; i < 5; i++) {
    console.log("Iteración", i);
}


//funciones

function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 3));  // 8

// funciones pero con flecha (arrow functions)

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2));  // 8



// manipulacion de arrays

let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(num => num ** 2); // [1, 4, 9, 16, 25]
let pares = numeros.filter(num => num % 2 === 0); // [2, 4]
let suma = numeros.reduce((acc, num) => acc + num, 0); // 15
