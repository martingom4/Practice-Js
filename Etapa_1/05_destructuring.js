// destructuring extraer datos de arrays u objetos

// destructuring en arrays


const numeros = [10, 20, 30];

// Forma tradicional
const a = numeros[0];
const b = numeros[1];

// Con destructuring
const [x, y] = numeros;
console.log(x); // 10
console.log(y); // 20


const [primero, , tercero] = [1, 2, 3];


// destructuring en objetos

const persona = {
  nombre: "Martin",
  edad: 23,
  pais: "Panamá"
};

const { nombre, edad } = persona;
console.log(nombre); // Martin
console.log(edad);   // 23


//tambie podemos renombrar
const { nombre: miNombre } = persona;

// ahora si viene lo chido spread operator (...) - clonar combinar, insertar

// en arrays

const original = [1,2,3]
const copia = [...original]//copia sin referencia
const combinado = [...original,4,5]
console.log(combinado)

// en objetos

const base = {nombre:"martin", edad:23}
const extendido = {...base, pais:"Panama"}

console.log(extendido)

//rest operator (...)- agrupar el resto de los elementos

//en arrays

const [primero1, ...resto] = [1,2,4,5]

console.log(primero1)
console.log(resto)

// en funciones

function sumar(...numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10


/*
1. Destructuring de objetos

const usuario = { nombre: "Ana", correo: "ana@gmail.com", rol: "admin" };
// Extrae el nombre y el rol
*/

const usuario = { nombre: "Ana", correo: "ana@gmail.com", rol: "admin" };
console.log(usuario.nombre)
console.log(usuario.rol)

/*
2. Destructuring con arrays

const colores = ["rojo", "verde", "azul", "amarillo"];
// Extrae el primero y guarda el resto

*/
const colores = ["rojo", "verde", "azul", "amarillo"];
const [primero2, ...guardado] = colores
console.log(primero2)
console.log(guardado)
/*
3. Spread en objetos

const datos = { id: 1, activo: true };
// Crea una copia con una nueva propiedad: tipo: "usuario"

*/
const datos = { id: 1, activo: true };
const datos2 = {...datos, tipo:'Usuario'}
console.log(datos2)


/*
4. Rest en función

// Crea una función que acepte cualquier cantidad de nombres y retorne un array con todos en mayúsculas
// toUpperCase()
*/
function nombres(...cantidad){
    return cantidad.map(nombre=> nombre.toUpperCase())
}

console.log(nombres('martin','gomez','torres'))
