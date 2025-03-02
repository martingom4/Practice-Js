// Esperar a que la página cargue antes de ejecutar JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const listaTransacciones = document.getElementById("lista-transacciones");

    // Cargar transacciones guardadas en localStorage
    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    actualizarUI();

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const monto = document.getElementById("monto").value.trim();

        if (nombre === "" || monto === "" || isNaN(monto)) {
            alert("Por favor, ingresa un nombre y un monto válido.");
            return;
        }

        const nuevaTransaccion = {
            id: Date.now(), // ID único basado en la fecha
            nombre,
            monto: parseFloat(monto).toFixed(2)
        };

        transacciones.push(nuevaTransaccion);
        guardarEnLocalStorage();
        actualizarUI();

        formulario.reset();
    });

    function actualizarUI() {
        listaTransacciones.innerHTML = "";

        transacciones.forEach((t) => {
            const li = document.createElement("li");
            li.innerHTML = `📌 ${t.nombre}: $${t.monto}
                <button class="eliminar" data-id="${t.id}">❌</button>`;

            listaTransacciones.appendChild(li);
        });

        // Agregar eventos a los botones de eliminar
        document.querySelectorAll(".eliminar").forEach((boton) => {
            boton.addEventListener("click", (evento) => {
                const id = parseInt(evento.target.getAttribute("data-id"));
                transacciones = transacciones.filter(t => t.id !== id);
                guardarEnLocalStorage();
                actualizarUI();
            });
        });
    }

    function guardarEnLocalStorage() {
        localStorage.setItem("transacciones", JSON.stringify(transacciones));
    }
});
