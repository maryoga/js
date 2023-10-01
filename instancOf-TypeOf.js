class Persona{
    constructor(info){
        this.info = info;
    }

    decirNombre(){
        if (this._info.nombre){
            return() => {
                console.log(`Mi nombre es ${this._info.nombre}`);
            }
        }
    }

    decirDireccion(){
        if(this._info.direcion){
            return() => {
                console.log(`Mi dirección es ${this._info.direcion}`);
            }
        }
    }    
}

function Perro(){
    Perro.prototype.ladra = function(){
        return "guau guau guau"
    }
}

let persona = new Persona({});
let mascota = new Perro();
let nombre = "Eleonor";

// hay 2 operadores que nos permiten averiguar el tipo de clase o tipo de dato de un objeto o una variable

// instanceof - nos permite averiguar si un objeto es la instancia de una clase
// instanceof - debe ser utilizado solo con objetos y no con valores o variables primitivos

console.log(mascota instanceof Perro);
console.log(persona instanceof Persona);

//Quiero saber si nombre es la instancia de un String. 
//Debido a que "" es una primitiva instanceof dispara error ya que lo que tenemos del lado der "no es un objeto"

//console.log(nombre instanceof "");


// typeof - nos permite saber que tipo de dato es un objeto o una variable, se puede utilizar para cualquier tipo de var

console.log(typeof nombre);
console.log(typeof persona);
console.log(typeof mascota);

console.log(typeof Perro);
console.log(typeof Persona);

