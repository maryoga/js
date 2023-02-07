
//Tipos de datos

document.write("<h1>Tipos de datos</h1>");

console.log([1,2,3,4]);

console.log({username:"Ryan", score:70.4})

var nameUser = "John";
let lastname = "Carter";

//nombredelusuario = 'Laurent';

let completeName = nameUser + ' ' + lastname;


const PI = 3.1415;

/*
console.log(nameUser);
console.log(lastname);
*/

console.log(completeName);


console.log(PI);

//OPERADORES JavaScript; LOGICOS


let numberOne = 60;
let numberTwo = 100;

//let result = numberOne + numberTwo;

let result = numberOne > numberTwo;

console.log(result);

//A continuación validando de forma lógica y comparando valores de variables

let PasswordDB = 'Pepe123';

//let Input = 'asdasda';
let Input = 'Pepe123';

let result2 = Input == PasswordDB;

console.log(result2);



//CONDICIONALES minuto 1:10.00

//Se puede comparar con 3 iguales === como un CONCEPTO INTERMEDIO DE JavaScript, es una comparación mas fuerte que la normal de doble igual
/*  CONTROL DE FLUJO IF
result = true
if (result === true){
    console.log('login correcto')
}

result = false

if (result === false){
    console.log('login incorrecto')
}
*/

/*
let score = 70

if (score > 30){
    console.log('You need to practice more');
}else if(score>15){
    console.log('Estas mejorando');
} else{
    console.log('You need to follow this tutorial');
}

*/


/*
//CONTROL DE FLUJO CONDICIONAL Switch

let typeCard = 'XDebit Card';

switch (typeCard){
    case 'Debit Card':
        console.log('This is a debit card');
        break;
    case 'Credit Card':
        console.log('This is a debit card');
        break;
    default:
        console.log('You do not have any card');
}

*/

//BUCLES - OTRO TIPO DE CONTROL CONDICIONAL
// Puedo aplicar una tarea a una gran cantidad de datos en un corto tiempo con ayuda de los Bucles


// let count = 1;

/* while (count > 0) {
    console.log('hello word ' + count);
    count = count - 1;
} */

/* while (count <= 50) {
    console.log('hello word ' + count);
    // count = count + 1;
    count++;
} */


//Manejo con arreglos

let names = ['Ryan','Joe', "John"];

// console.log(names.length);

//Recorriendo el arreglo por todos sus elementos
/* for(let i = 0; i < names.length; i++){
    console.log(names[i]);
} */

//Invirtiendo el recorrido del arreglo, empezamos a recorrer desde el número más alto hasta 0, usando decremento --
for(let i = names.length-1; i >= 0; i--){
    console.log(names[i]);
} 


//FUNCIONES EN JavaScript


