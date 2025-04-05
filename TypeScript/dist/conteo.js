"use strict";
const cadena = 'aaaaabbbBbcccciiii';
const conteo = (cadena) => {
    cadena.toLowerCase;
    const resultado = {};
    for (let i = 0; i < cadena.length; i++) {
        const letra = cadena[i];
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