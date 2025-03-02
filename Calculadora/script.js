document.addEventListener('DOMContentLoaded', function() {

    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click',() =>{
        mensaje.textContent = 'Este mensaje ha sido presionado';
    })

});
