/*
reduce() se usa para transformar un arreglo de cadenas en un único objeto que muestra cuántas veces aparece cada cadena
en el arreglo. Observa que esta llamada para reducir pasa un objeto vacío {} como parámetro de valorInicial. Esto se
usará como el valor inicial del acumulador (el primer argumento) pasado a la función callback
 */
var mascotas = ['perro', 'pollo', 'gato', 'perro', 'pollo', 'pollo', 'conejo'];

var recuentosDeMascota = mascotas.reduce(function(obj, mascota){
    if (!obj[mascota]) {
        obj[mascota] = 1;
    } else {
        obj[mascota]++;
    }
    return obj;
}, {});

console.log(recuentosDeMascota);

/*
Salida:
 {
    perro: 2,
    pollo: 3,
    gato: 1,
    conejo: 1
 }
 */