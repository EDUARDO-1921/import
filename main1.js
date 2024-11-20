const enRango = require('./utilidades1');

function verificarRango() {
    const numero = document.getElementById('inputRango').value;
    const resultado = enRango(Number(numero));
    document.getElementById('resultadoRango').textContent = `Resultado: ${resultado}`;
}
