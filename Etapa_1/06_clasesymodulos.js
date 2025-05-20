// aca veremos las clases que nos permite crear plantillas de objetos


class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const martin = new Persona("Martin", 23);
martin.saludar(); // Hola, soy Martin y tengo 23 años.

//ahora vamos con herencia con extends y super

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad); // Llama al constructor de Persona
    this.carrera = carrera;
  }

  presentarse() {
    console.log(`Estudio ${this.carrera}`);
  }
}

const ana = new Estudiante("Ana", 21, "Ingeniería");
ana.saludar();      // Heredado
ana.presentarse();  // Propio


// modulos (export/ import)

// esto es un export nombrado
// archivo persona.js
/*
export class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
*/
// export por defecto

export default function saludar(){
    console.log(`Hola, ${nombre}`)
}

/*
🧪 Ejercicios para practicar

1. Crea una clase Vehiculo con:
	•	Propiedades: marca, modelo
	•	Método: detalles() que imprima los datos

⸻
*/
class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    deatalles() {
        console.log(`La marca es: ${this.marca} y el modelo es ${this.modelo}`)
    }
}

const tesla = new Vehiculo("Tesla", 2020)
tesla.deatalles()

/*


2. Crea una subclase Moto que extienda Vehiculo y añada:
	•	Cilindraje
	•	Método descripcion() que diga: "Es una moto de X cc."

⸻
*/
class Moto extends Vehiculo{
    constructor(marca,modelo,cilindraje){
        super(marca,modelo)
        this.cilindraje = cilindraje
    }
    cilindro(){
        console.log(`el cilindraje es ${this.cilindraje}cc`)
    }
}

const moto = new Moto('bmw','2020', 1000)
moto.deatalles()
moto.cilindro()
/*

3. Separa los archivos:
	•	Vehiculo.js: contiene Vehiculo (export)
	•	Moto.js: importa Vehiculo, define y exporta Moto
	•	main.js: importa Moto y crea una instancia

*/
