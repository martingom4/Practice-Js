"use strict";
const cadena = 'bbaaaabBbcccciiii';
const conteo = (cadena) => {
    const resultado = {};
    const lowercad = cadena.toLowerCase();
    const sorted = Object.keys(resultado);
    sorted.sort();
    for (let i = 0; i < lowercad.length; i++) {
        const letra = lowercad[i];
        const soteado = sorted[i];
        console.log(soteado);
        if (resultado[letra] === undefined) {
            resultado[letra] = 1;
        }
        else {
            resultado[letra] += 1;
        }
    }
    return resultado;
};
console.log(conteo(cadena));
//# sourceMappingURL=conteo.js.map