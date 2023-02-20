console.clear();

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
//hacer 2 expansiones para hacer un único arreglo
//const  listaResultante = [...lista1, ...lista2, 7, 8, 9];
//console.log(listaResultante);

function suma(...numeros){

    const resultado = numeros.reduce((prevValue, nextValue)  => prevValue + nextValue, 0);
    console.log(resultado);
}

//suma(lista1[0], lista1[1], lista1[2]);
//suma(...lista1, ...lista2);
suma(1, 2, 3, 4);

