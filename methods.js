/*
    Metodos - 
*/


class Dog{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    sayGuau(){
        return "Guau Guau!!!";
    }

    //Metodo estático - Con un método así no estamos obligados a generar una instancia
    static sayMiau(){
        return "Say Miau Miau!!!";
    }



}

//Instanciamos la clase Dog
var dog = new Dog("Dogui","Golden");

console.log(dog.sayGuau());

console.log(Dog.sayMiau());

