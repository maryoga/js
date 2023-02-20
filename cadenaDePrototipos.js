const cheff = {
    tipo: 'Cocina Básica',
    cocinar: function (plato) {
        console.log(`Cocinando ${plato}`);
    },
    presentarse: function (){
        console.log(`Hola, soy un cheff especializado en ${this.tipo}`);
    }
};

const sacha = {
    nombre: 'sacha',
    edad: 31,
    profesion: 'Developer',
    tipo: 'Front-End',
    toString() {
        console.log(this.nombre);
    }
};

Object.setPrototypeOf(sacha, cheff);

//si en esta línea de código le agregamos un nuevo método al objeto cheff para cortar un intrediente que recibe por parametro
cheff.cortar = function (ingrediente) {
    console.log(`Cortando ${ingrediente}`);
}

sacha.cocinar = function (ingrediente){
    console.log('Yo no sé cocinar');
}

sacha.cortar('Zanahoria');

const pepe = { nombre: 'Pepe'};
const numeros = [3, 57, 94];

const sumar = (a, b) => a + b;

const regexp = /\d+/gi;

const ahora = new Date();
