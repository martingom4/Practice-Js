document.addEventListener("DOMContentLoaded", () => {
    const saldoElemento = document.getElementById("saldo");
    const listaTransacciones = document.getElementById("lista-transacciones");
    const formulario = document.getElementById("transaccion-form");
    const descripcionInput = document.getElementById("descripcion");
    const montoInput = document.getElementById("monto");

    let saldo = 0;
    let transacciones = [];

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const descripcion = descripcionInput.value.trim();
        const monto = parseFloat(montoInput.value);

        if (descripcion === "" || isNaN(monto)) {
            alert("Por favor ingresa una descripción y un monto válido.");
            return;
        }

        // Agregar la transacción a la lista
        transacciones.push({ descripcion, monto });
        actualizarUI();

        // Limpiar el formulario
        descripcionInput.value = "";
        montoInput.value = "";
    });

    function actualizarUI() {
        // Calcular saldo
        saldo = transacciones.reduce((acc, t) => acc + t.monto, 0);
        saldoElemento.textContent = `$${saldo.toFixed(2)}`;

        // Mostrar transacciones
        listaTransacciones.innerHTML = "";
        transacciones.forEach((t) => {
            const li = document.createElement("li");
            li.textContent = `${t.descripcion}: $${t.monto.toFixed(2)}`;
            li.style.borderLeftColor = t.monto >= 0 ? "#28a745" : "#dc3545";
            listaTransacciones.appendChild(li);
        });
    }
});
