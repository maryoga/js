class Curso {
    constructor(titulo, dificultad) {

        this.titulo = titulo;
        this._dificultad = dificultad;

        this.lecciones = [];
    }
    static BASE_URL = "desarrolloutil.com/cursos/";

    static saludar(){
        console.log("Saludo");

    }
    agregarLeccion(leccion){
        this.lecciones.push(leccion);
    }
    eliminarUltimaLeccion(){
        this.lecciones.pop();
    }
}


//const cursoJS = new Curso('JavaScript', 1);
//Curso.saludar();
//console.log(Curso.BASE_URL);





