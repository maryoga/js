

//Operación Unaria: Solo necesita un operador y un operando

console.log(typeof 7);

console.log(typeof 'Esdra');

console.log(- (10-2));



// VARIABLES Y CONSTANTES. Usamos el signo $ para interpolación de cadenas
// interpolar algunas operaciones matemáticas sencillas
//Template Strings - las comillas invertidas ` se consiguen presionando: AltGr + (tecla que esta debajo de + a la par de ENTER)
//Las comillas invertidas ` se consiguen presionando Alt + 96 también

var age = 21;
var place = 'Portugal';

const NAME = "Riley";

console.log(`Mi nombre es ${NAME} vivo en ${place} y tengo ${age} años`);


var a = 10;
var b = 10;
console.log(`¡JavaScript se publicó hace ${a+b} años!`);


//Dentro de un valor interpolado también se puede utilizar cualquier función:

function fn() { return "Este es el resultado de la función"; }
console.log(`Hola "${fn()}" Mundo`);

//ARREGLOS

var languajes = new Array('Ruby', 'JavaScript', 'Go', 'Angular');

languajes.push('swift'); //la instrucción "push" permite agregar un nuevo elemento en el arreglo
languajes.pop(''); //la instrucción "pop" permite eliminar el nuevo elemento que agregamos en el arreglo
//console.log(languajes);
console.log(languajes.sort()) // permite ordenar todos los elementos que tenemos en el arreglo

console.log(languajes.length)  //determinando la longitud del array


//Map o Mapas - Estructura Map

var car = new Map();

car.set("Brand", "Wolskwagen");
car.set("name", "Golf");
car.set("color", "White");

// console.log(car);

console.log(car.get("name")); //obtenemos una propiedad especifica
console.log(car.has("Brand")); //verifica si una propiedad existe - verdadero por que la propiedad existe aun
car.delete('Brand'); //Elimina una propiedad de un Mapa
console.log(car.has("Brand")); //verifica si una propiedad existe - falso por que la propiedad fue eliminada en la instrucción anterior

console.log(car);









