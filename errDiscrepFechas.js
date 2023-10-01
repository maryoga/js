// error Discrepancias al crear objetos de tipo fecha

console.log("La fecha de hoy es: ", new Date());

// UNIX epoch
console.log(new Date(628021800000));

//----------------------------------------
//console.log("%c Este es un texto amarillo sobre un fondo negro.", "color:yellow; background-color:#222")

console.log("\n%cDefiniendo fechas con strings", "color:yellow; background-color:#222");

//ISO 8601 Extended Format

console.log(new Date('December 17, 1995 03:24:00'));

console.log(new Date('2019-12-17T03:24:00'));

console.log("2014-12-01 - ", new Date('2014-12-01'));

// con este formato las fechas se leen en la manera americana
console.log('01-12-2014 - ', new Date('01-12-2014'));

// esta caracteristica hace que el motor de JS genere una fecha invalida porque no existe el mes 22 - 22-01-2014
console.log('22-01-2014 - ', new Date('22-01-2014')); // invalid date

console.log("Jul 8, 2005 - ", new Date("Jul 8, 2005"));

console.log("2005-07-08 - ", new Date("2005-07-08"));

console.log("Tue 10 Jul 2018 13:09:58 - ", new Date("Tue 10 Jul 2018 13:09:58"));

console.log("Tue 10 Jul 2018 13.09:58 GMT -06:00 - ", new Date("Tue 10 Jul 2018 13.09:58 GMT -06:00"));

//----------------------------------------

console.log("\n%cDefiniendo fechas con parámetros en el constructor", "color:lime; background-color:#222");

let fecha = new Date(2019, 10, 22, 12, 24, 30, 0);
console.log("fecha: ", fecha, "offset: ", fecha.getTimezoneOffset());
