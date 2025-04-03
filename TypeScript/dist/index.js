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
function validaEdad(edad, msj = 'Hola pa') {
    if (edad > 17) {
        return `puedes ingresar ${msj}`;
    }
    return 'no puedes ingresar';
}
validaEdad(18);
function errorUsuario() {
    throw new Error('Contraseña o correo incorrecta ');
}
let puntaje = 98;
puntaje = 'hola';
let animal = { id: 1, estado: '', nombre: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos(2);
const product = {
    name: '',
    created_ad: '',
    modified_at: ''
};
const nDeFibo = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        nombre: 'martin',
        create_at: new Date(),
    };
}
const user = getUser(1);
console.log('usuasrio', user === null || user === void 0 ? void 0 : user.create_at);
const array1 = null;
array1 === null || array1 === void 0 ? void 0 : array1[0];
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
//# sourceMappingURL=index.js.map