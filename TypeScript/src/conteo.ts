// quiero hacer un conteo de caracteres de una string

const cadena = 'aaaaabbbbcccc'


// para mi que teng oque hacer, tengo que recorrer la cadena y contar los caracteres, y guardar el resultado en un objeto


const conteo = (cadena: string): { [key: string]: number } => {

    const resultado: { [key: string]: number } = {}
    for (let i = 0; i < cadena.length; i++){
        const letra = cadena[i]
        console.log(letra)
    }
    return resultado
}

conteo(cadena)
