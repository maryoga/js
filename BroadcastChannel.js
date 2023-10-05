/**
 * The Broadcast Channel API allows basic communication between browsing 
 * contexts (that is, windows, tabs, frames, or iframes) and workers on the same origin.
 */

bc = new BroadcastChannel("carrito_amazon");


function addpProduct(product){
    // aqui llamada al backend

    bc.postMessage({
        action: "add",
        product: {
            id: 1,
            name: "Bambas de correr",
            price: 100,
            quantity: 1,
        },
    });
}


// otra pestaña - Suscripción

bc.onmessage = (event) => {
    if(event.data.action === "add") {
        // añadir a la UI el producto de la pestaña
        console.log(event.data.product);
    }
}

//-----------------------------------------------------------------------

// Canal de mensajes
bc = new BroadcastChannel('canal_mensajes');

// Escuchar mensajes
bc.onmessage = (event) => {
    console.log('Mensaje recibido:', event.data);
  };
  
  // Enviar un mensaje
  bc.postMessage('Hola a todos');