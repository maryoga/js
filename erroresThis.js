// Errores comunes al utilizar el keyword 'this'

// el objeto windows representa el contexto global de una App en JS
console.log(this);

var a = "una variable";

function quienSoy(){
    console.log(this.a);
    console.log(this);
}
quienSoy();

function otraFuncion(){
    console.log('\nLlamado de otra función');
    quienSoy();
}
otraFuncion();

let obj = {

    a: "otra variable",
    contador: 10,

    func: function(){
        console.log("Yo soy ", this);
    },

    // las func de flecha toman como contexto el lugar donde lexicamente han sido definidas
    // en este caso la func fue creada dentro del obj por lo tanto la ref a contador y al obj se mantendran
    // dentro del setTimeout
    func2: function(){
        setTimeout(() => {
            if(this.contador){
                this.contador = 20;
            }
            console.log(this.contador);
        }, 0);
    }
};

obj.func();
obj.func2();

/*
    El método call llama la función utilizando como contexto de ejecución el objeto que se pasa como parámetro
*/
quienSoy.call(obj);

// si hacemos clic en este botón con el código así como está nos dará undefined el acceso a la prop this.a
// si dejamos solo this, vemos que la func se ejecuta solo dentro del contexto del button y no dentro del contexto global
// donde la variable ha sido creada

/* let btn = document.getElementById("btn")
        .addEventListener("click", function(){
            console.log(this.a);
        }); */

// para arreglar el problema del bloque de código anterior, podemos utilizar la función flecha
// con esto ya no tomará como contexto el boton si no que tomará el contexto global que es donde se está def la func
let btn = document.getElementById("btn")
        .addEventListener("click", () => {
            console.log(this.a);
        });



// una manera de controlar el contexto de ejec de las func es utilizando la función call. Las funciones en JS son objetos
// por lo tanto, estás tambien tienen métodos
