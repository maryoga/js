// Errores de estructura de un JSON

// No es permitido comas sin valores al final de una estructura como aca luego de "Corea", :
// El error se soluciona: quitando la coma, o agregando un valor luego de la coma para que el obj tenga coherencia
// a la hora de parsearse

JSON.parse('{"nombre": "Natalia", "apellido": "Corea"}');

// Las props y las cadenas de caracteres deben ir entre doble comillas:
//JSON.parse("{'nombre': 'Natalia', 'apellido': 'Corea'}");

// agregar ceros delante de valores numéricos, esto no genera un error en JS, pero a la hora de parsear un JSON, sí.
// Hay 2 opciones para arreglar esto; se puede poner comillas dobles en esos valores númericos "01", haciendolos strings
// o eleminar el 0 delante del valor numérico en vez de 06, sea 6 solamente.

JSON.parse('{"dia": 1, "mes": 6, "anno": 2021}');


// Estructuras que no cierran, acá hace falta llave de cierre "}"
// en JSON cada objeto y arreglo debe abrirse y cerrarse correspondientemente

//JSON.parse('{"nombre": "Natalia", "apellido": "Corea");