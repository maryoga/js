'use strict';

let obj = {};
obj.nombre = "Natalia";

let poema = "Vuelo supremo";
poema = poema.toUpperCase();
console.log(poema);

// no se puede agregar a un valor primitivo una propiedad al objeto directamente. 
//Los valores primitivos solo tienen parámetros o funciones que nos permiten manipular esos valores
poema.autor = "Julián Marchena";