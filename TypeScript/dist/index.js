"use strict";
let mensaje = "Hola Mundo";
mensaje = "martin gomez";
mensaje = "mi novia es muy linda ";
console.log(mensaje);
function conAny(algo) {
    return algo;
}
let animales = ["perro", "gato", "pez"];
let nums = [];
let nums2 = [];
let tuplas = [1, "hola", true];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Tallas;
(function (Tallas) {
    Tallas["Chica"] = "s";
    Tallas["Mediana"] = "m";
    Tallas["Grande"] = "l";
    Tallas["ExtraGrande"] = "xl";
})(Tallas || (Tallas = {}));
console.log(Tallas.Chica);
const estado = 0;
const objeto = { id: 1,
    nombre: 'martin',
    talla: Tallas.Chica,
    direccion: {
        numero: 123,
        calle: 'calle falsa',
        pais: 'mexico'
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 18) {
        return 1;
    }
    else {
        return 0;
    }
};
function validaEdad(edad) {
    if (edad > 17) {
        return 'puedes ingresar';
    }
    return 'no puedes ingresar';
}
validaEdad(18);
//# sourceMappingURL=index.js.map