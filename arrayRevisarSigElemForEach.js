nombres = ["anna", "beth", "chris", "daniel", "ethan"]

function pasarLista(nombre, indice, arreglo) {
    let siguienteElemento = indice + 1 < arreglo.length ? "positivo" : "negativo"
    console.log(`Está el número de estudiante ${indice + 1}  - ${nombre} presente? Sí!. Hay un próximo estudiante? ${siguienteElemento}!`);
}

nombres.forEach((nombre, indice, arreglo) => pasarLista(nombre, indice, arreglo))
