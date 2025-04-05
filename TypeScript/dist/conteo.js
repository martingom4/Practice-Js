"use strict";
const cadena = 'aaaaabbbbcccc';
const conteo = (cadena) => {
    const resultado = {};
    for (let i = 0; i < cadena.length; i++) {
        const letra = cadena[i];
        console.log(letra);
    }
    return resultado;
};
conteo(cadena);
//# sourceMappingURL=conteo.js.map