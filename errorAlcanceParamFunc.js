// error de alcance en los parámetros de una func

let valor = 50;

// existia un error de referencia si dejabamos valor = valor +1
function miFuncion(valor2 = valor + 1){
    return valor2;
}

console.log("Valor retornado por 'miFuncion': ", miFuncion());