// aca vamos a estudiar las promesas

//Una promesa es un objeto que representa una operación que aún no se ha completado, pero que se completará en el futuro con un valor (resuelto) o un error (rechazada).



/*Estado    Significado
pending     En espera (promesa aún no resuelta)
fulfilled   Resuelta exitosamente (resolve)
rejected    Falló por algún motivo (reject)
 */


//sintaxis basica
/*
const miPromesa = new Promise((resolve, reject)=> {
    if(todoBien){
        resolve("exito")
    }else{
        reject("Algo salio mal")
    }
})
*/

// ejemplo con setTimeout

const esperar = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("pasaron 2 segundos")
        },2000)
    })
}

esperar().then(mensaje =>{
    console.log(mensaje)
})


// metodos importantes
/*
Método          ¿Para qué sirve?
.then()     Para capturar el resultado (resolve)
.catch()    Para manejar errores (reject)
.finally()  Se ejecuta siempre, haya error o no
*/
/*
🧪 Ejercicio 1: Crea una promesa que resuelva después de 3 segundos

// Resultado esperado: luego de 3 segundos, imprimir "¡Listo!"
*/

const segundos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Pasaron 3 segundos puedes probar')
        },3000)
    })
}
segundos().then(mensaje =>{
    console.log(mensaje)
})

/*
🧪 Ejercicio 2: Simula una API que falla o funciona aleatoriamente

// Si Math.random() > 0.5, resuelve con "Éxito API"
// Si no, rechaza con "Error en API"
// Luego, captura el resultado con .then() y el error con .catch()
*/

const apiPrueba = () => {
    const resultado = Math.random()
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(resultado > 0.5){
                resolve('Puedes pasar a mi casa ')
            }else{
                reject('No puedes pasar a mi casa')
            }
        },2000)
    })
}
apiPrueba().then(mensaje => {
    console.log(mensaje)
}).catch(mensaje =>{
    console.log(mensaje)
})


/*
🧪 Ejercicio 3: Crea una función sumarAsync(a, b) que:
	•	Devuelva una promesa
	•	Si ambos parámetros son números, resuelva con la suma
	•	Si no, rechace con un error tipo “Parámetros inválidos”
*/
//typeof
const sumaPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("❌ Parámetros inválidos");
      }
    }, 2000);
  });
};

async function sumarAsync() {
  try {
    const resultado = await sumaPromise(10, 20);
    console.log(`✔️ Resultado: ${resultado}`);
  } catch (error) {
    console.log(error);
  }
}

sumarAsync();
