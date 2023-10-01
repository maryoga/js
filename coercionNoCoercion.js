// Errores al comparar valores - coerción es que JS intenta igualar los tipos de datos

console.log('Comparación con coerción: ');

console.log("0 == false: ", 0 == false);

console.log("1 == true: ", 1 == true);

let arr = [];
console.log("arr[] == false: ", arr == false);

console.log("1 == '1': ", 1 == '1');

console.log("'' == false: ", '' == false);

console.log("null == undefined: ", null == undefined);

console.log("'' == 0: ", '' == 0);

//----------------------------------------------------------

console.log('\nComparación sin coerción: ');

console.log("0 === false: ", 0 === false);

console.log("1 === true: ", 1 === true);

console.log("arr[] === false: ", arr === false);

console.log("1 === '1': ", 1 === '1');

console.log("'' === false: ", '' === false);

console.log("null === undefined: ", null === undefined);

console.log("'' === 0: ", '' === 0);

//----------------------------------------------------------

console.log("\nCómo saber si un valor no es númerico: ");

console.log("NaN == Nan ", NaN == NaN);
console.log("NaN === Nan ", NaN === NaN);
// La manera correcta de saber si un valor no es un número es la siguiente con la función isNaN()
console.log("isNaN(NaN) ", isNaN(NaN));