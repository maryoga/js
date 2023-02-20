console.clear();

const personaje = {
    nombre: "Luis",
    apellido: "Lopez",
    alergias: {
        trigo: true,
        lactosa: false,
    },
};

const direccion = {
    calle: "Calle Falsa, 123",
    localidad: "Paris",
    pais: "Francia",
};

const persona = {
    ...personaje,
    ...direccion
}

personaje.alergias.lactosa = true;
console.log(personaje);
console.log(persona);


