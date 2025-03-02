/*vamos a hacer una calculadora de prespupuestos */


// puedo hacerlo por funciones pero no quiero meterme en eso ahora mismo
const readlineSync = require('readline-sync');
const fs = require('fs');

let transacciones = []; // Guardará ingresos y gastos
let saldo = 0;

// el siguiente paso es poner nombre a los ingresos/gastos y formato de moneda

// 🔹 Cargar transacciones al iniciar el programa
try {
    const contenido = fs.readFileSync('transacciones.json', 'utf-8');
    transacciones = JSON.parse(contenido);
    saldo = transacciones.reduce((total, t) => total + t.monto, 0); // Calcula el saldo inicial
    console.log('📂 Datos cargados correctamente.');
} catch (error) {
    console.error('⚠️ No se pudo leer el archivo de transacciones, iniciando sin datos previos.');
}

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
    console.log('5. Guardar transacciones');
    console.log('6. Salir');
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
            let nombre = readlineSync.question('Introduce el nombre del gasto: ');
            let gasto = readlineSync.questionInt('Introduce el monto del gasto: ');
            saldo = calcularGasto(gasto, saldo);
            transacciones.push({ tipo: nombre , monto: -gasto }); // Guardamos el gasto como negativo
            console.log(`❌ Gasto de $${gasto} agregado.`);
            break;
        case 3:
            console.log(`💰 Tu saldo actual es: $${saldo}`);
            break;
        case 4:
            console.log('📜 Historial de transacciones:');
            if (transacciones.length === 0) {
                console.log("⚠️ No hay transacciones registradas.");
            } else {
                transacciones.forEach((t, i) => {
                    console.log(`${i + 1}. ${t.tipo}: $${t.monto}`);
                });
            }
            break;
        case 5:
            fs.writeFileSync('transacciones.json', JSON.stringify(transacciones, null, 2));
            console.log('📦 Transacciones guardadas exitosamente.');
            break;
        case 6:
            console.log('👋 Saliendo...');
            continuar = false;
            break;
        default:
            console.log('⚠️ Opción no válida, intenta de nuevo.');
    }
}
