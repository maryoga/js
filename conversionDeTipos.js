const cadena = "5";
const numero = 5.25;
const condicion = true;
const nulo = null;
let indefinido;

// converesión con cadenas
console.log(cadena + numero);
console.log(cadena + condicion);
console.log(cadena + nulo);
console.log(cadena + indefinido);

//conversiones con número
console.log(numero + condicion);
console.log(numero + nulo);
console.log(numero + indefinido);


//conversión de cadena a número, ya sea con decimales o entero.
const cadena2 = "5.5";

console.log(parseFloat(cadena2));
console.log(parseInt(cadena2));
console.log(parseInt(numero));  //convierte a numero entero 5.25


