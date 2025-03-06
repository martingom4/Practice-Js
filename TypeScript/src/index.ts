let mensaje: string  = "Hola Mundo"

mensaje = "martin gomez"

mensaje = "mi novia es muy linda "

console.log(mensaje)



function conAny (algo:any){
    return algo
}

let animales = ["perro", "gato", "pez"] // array de strings
let nums: number[] = [] // esto es una manera de definir
let nums2: Array<number> = []// esto es otra manera de definir


// animales.map(x => x.toUpperCase()) autocompletado sabe que tipo de dato es


// las tuplas no existen en js pero en ts si

let tuplas: [number, string, boolean]= [1, "hola", true] // esto es una tuplas

// enum

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

enum Tallas {
    Chica = 's',
    Mediana = 'm',
    Grande = 'l',
    ExtraGrande = 'xl'
}

console.log(Tallas.Chica)

const enum loadingState {
    Idle,
    Loading,
    Success,
    Error
}

const estado = loadingState.Idle

const objeto: {id: number,
    nombre?: string
} = {id:1, nombre: 'martin'}

objeto.nombre = "hola"
