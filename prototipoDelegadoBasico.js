const cheff = {
    tipo: 'Cocina Básica',
    cocinar: function (plato) {
        console.log(`Cocinando ${plato}`);
    }
};

const sacha = {
    nombre: 'sacha',
    edad: 31,
    profesion: 'Developer',
    tipo: 'Front-End'
};

Object.setPrototypeOf(sacha, cheff);

//si en esta línea de código le agregamos un nuevo método al objeto cheff para cortar un intrediente que recibe por parametro
cheff.cortar = function (ingrediente) {
    console.log(`Cortando ${ingrediente}`);
}

sacha.cortar('Zanahoria');

