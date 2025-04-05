// quiero hacer un conteo de caracteres de una string

const cadena = 'aaaaabbbBbcccciiii'

// para mi que teng oque hacer, tengo que recorrer la cadena y contar los caracteres, y guardar el resultado en un objeto
const conteo = (cadena: string): { [key: string]: number } => {
    
    const resultado: { [key: string]: number } = {}
    for (let i = 0; i < cadena.length; i++){
        const letra = cadena[i]//aca estamos guardando las letra ejemplo i=0 -> a y progresivamente
        //tengo las letra guardadas en letra
        //el objeto es: {['a']:1 o numeros totales}
        //que tengo que hacer, como puedo meterlo al objeto, pero para meterlo al objeto debo de comprobar que no esta ya
        if(resultado[letra] === undefined){
            resultado[letra] = 1
        }else{
            resultado[letra] += 1
        }
    }
    return resultado
}
console.log(conteo(cadena))
