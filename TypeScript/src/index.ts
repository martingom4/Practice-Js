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

type Direccion = {
    numero: number,
    calle: string
    pais: string
}
type Persona  = {id: number,
    nombre?: string,
    talla: Tallas,
    direccion: Direccion
}
const objeto: Persona = {id:1,
    nombre: 'martin' ,
    talla: Tallas.Chica,
    direccion: {
        numero: 123,
        calle: 'calle falsa',
        pais: 'mexico'
    }
}

const arr: Persona[] = [] // array de objetos de tipo persona



const fn:(a:number) => number = (edad: number ) => {
    if (edad > 18) {
        return 1
    } else {
        return 0
    }
}

function validaEdad(edad:number, msj:string ='Hola pa'):string{
    if (edad>17){
        return `puedes ingresar ${msj}`
    }
    return 'no puedes ingresar'

}


validaEdad(18)
