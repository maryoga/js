/*
    Parametros Spread
*/

function device(type, name, brand) {
    console.log(`El ${type}  ${name}  es de la marca ${brand}`)
}

var cellPhone = new Array("Celular", "X2", "Motorolla");

device(...cellPhone);
