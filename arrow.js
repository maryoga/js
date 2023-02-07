/*
    Función Arrow - Función de Flecha
*/

/* Forma común de definir una función
var suma = function (numA, numB) {
    return numA + numB;
}
 */


//Definir función Arrow o Flecha; este tipo de funciones no cuentan con el objeto de argumentos

var suma = (numA, numB) => numA + numB;

console.log(suma(5,15));