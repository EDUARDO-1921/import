
const esBisiesto = require('./utilidades5');

const anios = [2020, 1900, 2000, 2023, 2400];

anios.forEach((anio) => {
    console.log(`Año: ${anio} -> ${esBisiesto(anio)}`);
});
