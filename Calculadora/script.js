document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const listaTransacciones = document.getElementById('lista-transacciones');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const monto = document.getElementById('monto').value;
        if (nombre === '' || monto === '') {
            alert('Por favor, llena ambos campos');
            return;
        }
        //crear un nuevo elemento de lista (li)
        const nuevaEntrada = document.createElement('li');
        nuevaEntrada.textContent = `📌 ${nombre}: $${parseFloat(monto).toFixed(2)}`;
        //Agregar elemento a la lista
        listaTransacciones.appendChild(nuevaEntrada);
        formulario.reset();

    });
});
