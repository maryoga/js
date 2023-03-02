//Destructuring Assignment - Asignación de Desestructuración con Arrays
console.clear();
const listaNumeros = [12, 21, 38, 45, 67, 87];

const [posicion1, posicion2, ...restoElementos] = listaNumeros;

console.log(posicion1, posicion2, restoElementos);