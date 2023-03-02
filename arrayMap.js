let prefijos = ["wonder", "spider", "ant", "iron"]
let hombre = "man";
let mujer = "woman";

let nombresCompletos = prefijos.map(function(prefijo, indice) {
    return (indice == 0) ? prefijo + mujer : prefijo + hombre;
});

console.log(nombresCompletos);

// ["wonderwoman", "spiderman", "antman", "ironman"]

//Conseguir nombres reales de los Vengadores

let vengadores = [
    {nombre: "steve rogers", nombreHeroe: "captain america"},
    {nombre: "tony stark", nombreHeroe: "iron man"},
    {nombre: "bruce banner", nombreHeroe: "the hulk"},
    {nombre: "peter parker", nombreHeroe: "spiderman"},
    {nombre: "tchalla", nombreHeroe: "black panther"}
]

let nombresReales = vengadores.map(vengador => vengador.nombreHeroe);

console.log(nombresReales);

// ["steve rogers", "tony stark", "bruce banner", "peter parker", "tchalla"]

//Cómo funciona el argumento del arreglo
const arregloViejo = [33, 20, 10, 5];
const nuevoArreglo = arregloViejo.map((valorActual, indice, arr) => {
    let siguienteItem = indice + 1 < arr.length ? arr[indice + 1] : 0
    return valorActual - siguienteItem;
});


console.log(nuevoArreglo);

// [13, 10, 5, 5]