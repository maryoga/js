/*
    Herencia: Es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.
    La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes a fin de reutilizar el código,
    generando así una jerarquía de clases dentro de una aplicación. Si una clase deriva de otra, esta hereda sus atributos y
    métodos y puede añadir nuevos atributos, métodos o redefinir los heredados.
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





