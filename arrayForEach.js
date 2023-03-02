/*
Un grupo de estudiantes hacen fila en espera de que pasen lista. El coordinador de la clase se mueve a través
de la fila y dice el nombre de c/u de los estudiantes mientras marca si están presentes o ausentes. El coordinador
no cambia el orden de los estudiantes en la fila.

Ejemplos del método forEach() en JavaScript
 */

//nombres = ["anna", "beth", "chris", "daniel", "ethan"]
nombres = [
    {nombre:"anna",pronombre: "ella"},
    {nombre: "beth",pronombre: "ella"},
    {nombre:"chris",pronombre: "él"},
    {nombre: "daniel",pronombre: "él"},
    {nombre: "ethan",pronombre: "él"}
]

function pasarLista(estudiante, indice) {
    console.log(`El número de estudiante  ${indice + 1} ${estudiante.nombre}. Está ${estudiante.pronombre} presente? Sí!`);
    }

nombres.forEach((nombre, indice) => pasarLista(nombre, indice));

/*
"Está el número de estudiante 1  - anna presente? Sí!"
"Está el número de estudiante 2  - beth presente? Sí!"
"Está el número de estudiante 3  - chris presente? Sí!"
"Está el número de estudiante 4  - daniel presente? Sí!"
"Está el número de estudiante 5  - ethan presente? Sí!"
*/