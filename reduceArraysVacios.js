const cursoJS = {
    title: "Curso JS",
    Profesor: "Pablo"
};

for (const i in cursoJS) {
    console.log(`${i} -> ${cursoJS[i]}`);
}


// Reduciendo array vacíos

const nombres = ["Sofia", "Ana", "Maria", "Patricia", "Lucia"];

let nomFiltrados = nombres.filter(nom => nom.indexOf("a") === -1);

let reducidos = nomFiltrados.reduce(( lista, nom ) => lista + nom.toUpperCase(), "");

console.log(reducidos);

