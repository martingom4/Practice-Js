document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const monto = document.getElementById('monto').value;

        //mostrar datos en pantalla
        resultado.textContent = `Hola ${nombre}, el monto ingresado es: ${monto}`;
        formulario.reset(); //limpiar formulario
    });
});
