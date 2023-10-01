// Cómo el entorno léxico afecta a la referencia de variables

const a = "una variable";

function impVariable(){
    console.log(a);
}
console.log("\nPrimera llamada: ");

impVariable();

function otraFuncion(){
    const a = "otra variable";
    impVariable();
    console.log("El valor dentro de 'otraFuncion' es: ", a);
}

console.log("\nSegunda llamada dentro de 'otraFuncion': ");

otraFuncion();

let obj = {
    a: "otra variable",
    contador: 10
};

console.log("\nTercera llamada cambiando el valor de 'this': ");

impVariable.call(obj);