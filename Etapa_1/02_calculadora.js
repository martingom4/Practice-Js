/*vamos a hacer una calculadora de prespupuestos */


// puedo hacerlo por funciones pero no quiero meterme en eso ahora mismo
const readlineSync = require('readline-sync');

let saldo = readlineSync.questionInt("Introduce tu saldo inicial: ");
let transacciones = []; // Guardará ingresos y gastos

function calcularGasto(gasto, saldo) {
    return saldo - gasto;
}

function menu() {
    console.log('\nBienvenido a la calculadora de presupuestos');
    console.log('---------------------------------------------');
    console.log('1. Agregar ingreso ');
    console.log('2. Agregar gasto');
    console.log('3. Ver saldo');
    console.log('4. Listar transacciones');
    console.log('5. Salir');
    console.log('---------------------------------------------');
}

let continuar = true;

while (continuar) {
    menu();
    let opcion = readlineSync.questionInt('Selecciona una opción: ');

    switch (opcion) {
        case 1:
            let ingreso = readlineSync.questionInt('Introduce el monto del ingreso: ');
            saldo += ingreso;
            transacciones.push({ tipo: 'Ingreso', monto: ingreso });
            console.log(`✅ Ingreso de $${ingreso} agregado.`);
            break;
        case 2:
            let gasto = readlineSync.questionInt('Introduce el monto del gasto: ');
            saldo = calcularGasto(gasto, saldo);
            transacciones.push({ tipo: 'Gasto', monto: gasto });
            console.log(`❌ Gasto de $${gasto} agregado.`);
            break;
        case 3:
            console.log(`💰 Tu saldo actual es: $${saldo}`);
            break;
        case 4:
            console.log('📜 Historial de transacciones:');
            transacciones.forEach((t, i) => {
                console.log(`${i + 1}. ${t.tipo}: $${t.monto}`);
            });
            break;
        case 5:
            console.log('👋 Saliendo...');
            continuar = false;
            break;
        default:
            console.log('⚠️ Opción no válida, intenta de nuevo.');
    }
}
