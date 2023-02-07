//Destructuring Assignment - Asignación de Desestructuración

var animals = new Array("Dog", "Cat", "Mouse");

//Asignación sin Destructuring
/*
var dog = animals[0];
var cat = animals[1];
var mouse = animals[2];
*/

//Asignación con Destructuring, ESTO PERMITE UN CODIGO MAS LIMPIO, se hace la asignación en una sola línea de código

var [dog, cat, mouse] = animals;

console.log(dog, cat, mouse);


