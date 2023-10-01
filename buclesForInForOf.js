/**
 * Los bucles for..in recorren todas las prop de un objeto y devuelven los indices o los nombres de las prop de este obj
 * Los bucles for..of devuelven los valores del arreglo, dependen de la implementación del método iterador que el obj tenga
 * El método iterador lo que indica e orden en que los valores se iteran dentro del objeto
 * En este ejem el método iterador solo toma en cuenta los valores que se definen dentro del arreglo e ignora cualquier
 * otra prop que esten en el arreglo
 * 
 */

let arr = ['elemento1', 'elemento2', 'elemento3'];

arr.nuevapropiedad = 'prop';

console.log('\nfor..in en un arreglo');

// clave hace referenia a las claves en el objeto
for(let clave in arr){
    console.log(clave);
}

console.log('\nfor..of en un arreglo');

// valor hace referenia a los valores en el objeto
for(let valor of arr){
    console.log(valor);
}

console.log(arr[Symbol.iterator]);

// ----------------------------------------

let cadena = "ABC";

console.log("\nfor..in en un string");

for(let letra in cadena){
    console.log(letra);
}

console.log("\nfor..of en un string");

for(let letra of cadena){
    console.log(letra);
}

console.log(cadena[Symbol.iterator]);

// ----------------------------------------
let obj = {
    a: 'elemento1',
    b: 'elemento2',
    c: 'elemento3',
}

console.log("\nfor..in en un objeto");

for(let clave in obj){
    console.log(clave);
}

console.log("\nfor..of en un objeto");
// el uso de for..of causará errores en un objeto porque no son iterables, no implementan por defecto el método iterador

// para resolver esto hacemos lo sig
// Implementacion de metodo @@iterator
obj[Symbol.iterator] = function* (){
    yield "elemento1";
    yield "elemento2";
    yield "elemento3";
};

for(let valor of obj){
    console.log(valor);
}

