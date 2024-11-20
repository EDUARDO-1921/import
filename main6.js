const esElegibleParaPrestamo = require('./utilidades6');
const casos = [
    { salario: 35000, puntaje: 700 },
    { salario: 25000, puntaje: 700 },
    { salario: 40000, puntaje: 600 },
    { salario: 30000, puntaje: 660 },
    { salario: 32000, puntaje: 700 },
];

casos.forEach((caso, index) => {
    const { salario, puntaje } = caso;
    console.log(`Caso ${index + 1}: Salario: ${salario}, Puntaje: ${puntaje} -> ${esElegibleParaPrestamo(salario, puntaje)}`);
});
