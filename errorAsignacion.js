// errores de asignación inválida de valores
// no es permitido asignar un valor null al objeto this
//this = null;

//----------------------------
function generarColor(){
    return Math.floor(Math.random() * 16777215).toString(16);
}

if (generarColor == "ffffff"){
    console.log("El color es blanco");
}