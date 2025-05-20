¡Perfecto, Martin! Aquí tienes un resumen completo de todo lo que hemos estudiado en formato Markdown, listo para que lo uses como referencia o lo guardes como parte de tu documentación personal.

⸻



## ✅ Arrow Functions
```js
const saludar = nombre => `Hola, ${nombre}`;
const sumar = (a, b) => a + b;

	•	No tienen su propio this.
	•	No se pueden usar con new.
	•	No tienen arguments.
	•	Uso común en .map(), .filter(), .reduce().

⸻

✅ Hoisting
	•	Declaraciones de funciones y var se elevan al inicio.
	•	let y const tienen Zona Muerta Temporal (TDZ).

saludar(); // Funciona por hoisting
function saludar() { ... }

console.log(nombre); // ReferenceError con let/const
let nombre = "Martin";


⸻

✅ Promesas (Promise)

const esperar = () => new Promise(resolve => {
  setTimeout(() => resolve("Listo"), 3000);
});

	•	Estados: pending, fulfilled, rejected.
	•	Métodos: .then(), .catch(), .finally().

⸻

✅ async/await

async function ejecutar() {
  try {
    const resultado = await esperar();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}


⸻

✅ Callbacks

function operar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}


⸻

✅ try/catch

try {
  const r = dividir(10, 0);
} catch (error) {
  console.log("Error:", error.message);
}


⸻

✅ Destructuring

Objetos:

const { nombre, edad } = persona;

Arrays:

const [primero, ...resto] = [1, 2, 3];


⸻

✅ Spread y Rest

Spread:

const copia = [...original];
const fusion = { ...obj1, ...obj2 };

Rest:

function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b);
}


⸻

✅ Clases y Herencia

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  detalles() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindraje) {
    super(marca, modelo);
    this.cilindraje = cilindraje;
  }
  descripcion() {
    console.log(`Es una moto de ${this.cilindraje} cc.`);
  }
}


⸻


