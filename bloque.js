//VARIABLES DE BLOQUE se determinan usando la palabra clave "Let", las que no son de bloque se definen con "Var"
//Las variables de Bloque están limitadas a su alcance, ya que existiran en el bloque donde estas fueron declaradas
//Las variables declaradas con "Var" son Globales

function suma() {
    let resultado = 5 + 10;
    console.log(`el resultado de las suma es ${resultado}`)
}

//Llamamos la función suma()

suma();

//Recordar que cuando usamos var para declarar una variable, la estámos declarando Global, pero si usamos "let", el vaolor de
//esa variable no existe fuera del bloque en que fue declarado
for (var i= 0; i < 10; i++){
    console.log(`El valor de i es ${i}`);
}

console.log(`El último valor de i es ${i}`);

