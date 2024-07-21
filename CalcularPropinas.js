function calcularPropina() {
    var monto = parseFloat(document.getElementById('monto').value);
    var porcentajePropina = parseFloat(document.getElementById('porcentaje').value);
    
    if (isNaN(monto) || isNaN(porcentajePropina)) {
        alert('Por favor ingresa números válidos');
        return;
    }
    
    var propina = monto * (porcentajePropina / 100);
    var total = monto + propina;
    
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 
        `<p>Subtotal: $${monto.toFixed(2)}</p>
        <p>Propina (${porcentajePropina}%): $${propina.toFixed(2)}</p>
        <p>Total a pagar: $${total.toFixed(2)}</p>`;
}
