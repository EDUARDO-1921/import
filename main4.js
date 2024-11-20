
const nivelRiesgo = require('./utilidades4');
const casos = [
    { edad: 65, tieneEnfermedades: false },
    { edad: 55, tieneEnfermedades: true },
    { edad: 30, tieneEnfermedades: false },
    { edad: 45, tieneEnfermedades: false },
    { edad: 70, tieneEnfermedades: true },
];

casos.forEach((caso, index) => {
    const { edad, tieneEnfermedades } = caso;
    console.log(`Caso ${index + 1}: Edad: ${edad}, Enfermedades: ${tieneEnfermedades} -> Nivel de riesgo: ${nivelRiesgo(edad, tieneEnfermedades)}`);
});
