console.clear();
const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: {
        calle: 'Av Hope, 123',
        ciudad: "Madrid",
        pais: "España",
    },
};
function getFullName({nombre, apellido}) {
    return `${nombre} ${apellido}`;
}
console.log(getFullName(persona));
function getSalary() {
    return [970, 1020, 980, 1123];
}

const [salario1, salario2, salario3, salario4] = getSalary();

console.log(salario1, salario2, salario3, salario4);