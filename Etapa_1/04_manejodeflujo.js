// en este vamos a ver try/catch, setTimeout y callbacks

//try/catch es el manejo de errores


//ejemplo

function raizCuadrada(n){
    if(n<1) throw new Error("No se puede calcular la raiz cuadrada de un numero negativo")
}

try{
    const resultado = raizCuadrada(-9)
    console.log("resultado",resultado)
}catch(error){
    console.log("Error captado:", error.message)
}

// setTimeout tempoorizador asincrono


setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);


// callbacks- FUnciones que se pasan como argumento
//se pasa como argumento a otra funcion para ser llamada luego

function operacion(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

operacion(3, 4, (resultado) => {
  console.log("Resultado:", resultado);
});

/*
🔧 Ejercicio 1: Usa setTimeout con callback

// Crea una función esperar3s(callback) que espere 3 segundos y luego llame al callback con el mensaje "¡Terminado!"

esperar3s((mensaje) => {
  console.log(mensaje); // Debe imprimir luego de 3s
});
*/

function esperar3s(callback) {
    setTimeout(()=>{
        const mensaje = 'Terminado'
        callback(mensaje)
    },3000)

}
esperar3s((mensaje)=>{
    console.log(mensaje)
})
/*

🔧 Ejercicio 2: Usa try/catch con una función que pueda lanzar error

// Función dividir(a, b) que lanza error si b es 0, y si no, devuelve a / b
// Usa try/catch para manejar el error

// Resultado esperado: si b = 0, mostrar "Error: División por cero no permitida"
*/
function dividir(a,b){
    if(b === 0){
        throw new Error("no se puede dividir entre cero")
    }else{
       const resultado =  a/b
       return resultado
    }
}

try{
    const resultado = dividir(8,0)
    console.log("el resultado es:", resultado)
}catch(error){
    console.log("error capatado",error.message)
}
/*
🔧 Ejercicio 3: Crea una función procesarDato(dato, callback) que:
	•	Si dato es string, lo pase a mayúscula con el callback
	•	Si no, lance un error con throw y maneja el error con try/catch
*/

function procesarDato(dato, callback) {
  if (typeof dato === "string") {
    return callback(dato.toUpperCase());
  } else {
    throw new Error("Dato inválido: se esperaba un string");
  }
}

try {
  procesarDato("hola", (resultado) => {
    console.log("El mensaje en mayúscula es:", resultado);
  });

  // Probar con un dato no string
  // procesarDato(123, res => console.log(res)); // Esto lanzaría un error
} catch (error) {
  console.log("❌ Error capturado:", error.message);
}
