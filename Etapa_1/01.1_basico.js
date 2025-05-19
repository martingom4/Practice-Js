//Aca vamos a entender como funciona todo basicamente en js, quiero entender para despues hacer smaller program




// Variables (let,const)


//let es una variable que se puede reasignar y const es una variable constante


let nombre = "martin" // esta es una variable que se puede cambiar el nombre mas adelante
nombre = "Arleen"// es esto lo que se va a imprimir

console.log(nombre)

// en cambio con const, tenenemos este ejemplo

const nombre1 = 'martin'
//nombre1 = 'martin2'TypeError: Assignment to constant variable. este es el error que lanzaria, ya que es una variable constante
console.log(nombre1)


// ahora vamos con las funciones, y los dos tipos diferentes, tenemos declarativas y arrow functions

// las declarativas son
console.log(saludar('Martin Gomez'))// el hoisting te permite hacer esto

function saludar(nombre){
    return `Hola ${nombre}`
}

// tiene su propio hoisting que primer lee las funciones que el resto osea que se puede declarar y usar en cualquier parte del codigo
console.log(saludar('Martin'))


//ahora las arrow functions no tienen this tampoco arguments ni super asi quen o se puede usar con this ni con constructores para eso usar las funciones tradicionales

// algunos usos comunes pueden ser como callbacks, que son map,filter...etc

//ejemplo
/*
//const nombres = ['martin','arleen','mario']

//necesito devolver los nombres que estan ahi
const saludos = nombres.map(nombres => nombres)
console.log(saludos)
*/

// veamos algunos ejemplos practicos para mejor entendimiento

/*


Parte 1: Convertir funciones tradicionales a arrow functions

Convierte las siguientes funciones a arrow functions:

1.1

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

*/
const unouno = saludito => `Hola ${saludito}`
console.log(unouno('martin'))
/*

1.2

function multiplicar(a, b) {
  return a * b;
}

*/

const multiplicacion = (a,b) => a*b
console.log(multiplicacion(2,4))

/*


1.3

function obtenerHoraActual() {
  return new Date().toLocaleTimeString();
}

*/

const horaActual = () => new Date().toLocaleTimeString()
console.log(horaActual())

/*

1.4

function cuadrado(n) {
  return n * n;
}


*/

const cuadrado = (n) => n**2
console.log(cuadrado(7))



//Parte 2: Usa arrow functions con .map, .filter y .reduce

//2.1 Usa .map para convertir esta lista de nombres a mayúsculas:

const nombres = ["ana", "juan", "martin"];

const lista = (nombres) => {
  return nombres.map(nombres => nombres.toUpperCase())
}
console.log(lista(nombres))


//2.2 Usa .filter para obtener los números mayores a 10:

const numeros = [4, 12, 7, 20, 3];

const numerosl = (numeros) => numeros.filter(numeros => numeros > 10)


console.log(numerosl(numeros))

///2.3 Usa .reduce para sumar todos los valores del array:

const valores = [10, 20, 30];


const reducir  = (valores) =>{

}

//🧪 Parte 3: Detecta errores en el uso de arrow functions

//3.1 ¿Qué problema hay aquí?

const persona = {
  nombre: "Martin",
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar();




//3.2 ¿Y aquí?

const sumar = (a, b) => {
  const resultado = a + b;
  return resultado;
};

console.log(sumar(2, 3));


//1.1



