//Destructuring Assignment - Asignación de Desestructuración con Objetos
console.clear();

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: {
        calle: 'Avenida Plata, 123',
        codigoPostal: 48080
    }
};

const {
    nombre,
    direccion: {calle, codigoPostal}
} = persona;

console.log(nombre, calle, codigoPostal);