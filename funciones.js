
//FUNCIONES - Definiendo una Función en JavaScript. Es una manera en que podemos empaquetar nuestro código.
//Una función puede recibir hasta 255 parámetros

//La función define una tarea pero no la está ejecutando

/*
function greeting(name) {
        console.log('hello... ' + name);
}

let name = 'Roth';

greeting(name);

*/


//FUNCION SUMAR

function add(n1, n2) {
    console.log(n1 + n2);
}

add(15,18);

function sayHello(name) {
    console.log(`Hola ${name} cómo estás?`)
}

//Función anónima - no tiene nombre
var sayHi = function (name) {
   console.log(`Hola que pasa ${name}`) 
}

var suma = function (numA, numB) {
    return numA + numB;
}

sayHello('Maria');
sayHi('Parros');
console.log(`El resultado de la suma es ${suma(5,9)}`)



