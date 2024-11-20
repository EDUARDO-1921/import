const calcularDescuento = require('./utilidades2');

function calcular() {
    const precio = document.getElementById('inputPrecio').value;
    const resultado = calcularDescuento(Number(precio));
    document.getElementById('resultadoDescuento').textContent = `Precio con descuento: ${resultado}`;
}
