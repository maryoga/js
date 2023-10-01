// Manejo de errores dentro de la ejecución de promesas - util para crear un sist de deteccion de errores en una App

// Evento de deteccion global
window.addEventListener("unhandledrejection", evento => {
    console.log("\n%c Deteccion global de un error no capturado", "color:yellow; background-color:#222");
    console.log(evento.promise, evento.reason);
});

function promesaConError() {
    return new Promise((resolve, reject) => {
        throw new Error("Oh no!");
    });
}

function promesaRechazada() {
    return new Promise((resolve, reject) => {
        reject("Valor rechazado");
    });
}
/**
 * Si agregamos un try..catch a la llamada de ambas funciones, el evento global no se dispara, se dispara el catch
 */
async function ejecutarPromesas() {
     try {
        await promesaRechazada();
        // await promesaConError();
    } catch (error) {
        console.log("\n%c Un error ha sucedido: ", "color: orange; background-color:#222", error);        
    }
    
}
// ejecutarPromesas();

/**
 * Este evento se llama en caso de que una promesa ha sido rechazada, eventuamente se le agrega un método
 * para detectar el error
 */
window.addEventListener('rejectionhandled', evento => {
    console.log("\n%c Promesa rechazada con eventual manejo: ", "color:lime; background-color:#222");
    console.log(evento.promise, evento.reason);
});

let promesa = promesaRechazada();

setTimeout(()=> promesa.catch(), 0);