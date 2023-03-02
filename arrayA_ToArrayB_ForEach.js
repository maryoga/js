let aunEstudiante = ["anna", "beth", "chris", "daniel", "ethan"]
let yaGraduado = []

function estudianteGraduado(estudiante, indice) {
    let objeto = { nombre: estudiante, posicion: indice + 1}
    yaGraduado[indice] = objeto
}

aunEstudiante.forEach((nombre, indice) => estudianteGraduado(nombre, indice));

console.log(yaGraduado);

/*
[
    { nombre: "anna", posición: 1},
    { nombre: "beth", posición: 2},
    { nombre: "chris", posición: 3},
    { nombre: "daniel", posición: 4},
    { nombre: "ethan", posicion: 5}]
]
*/