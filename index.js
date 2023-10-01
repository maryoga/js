/**
 * 200 OK. La petición es exitosa.
 * 
 * 400 Bad Request. La petición tiene un formato incorrecto
 * 401 Unauthorized. El cliente no tiene autorización de accesso
 * 
 * 500 Internal Server Error. Cuando sucede error en el servidor
 * 501 Not implemented. El servidor no reconoce la petición
 * 
 * HTTP response status codes
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * 
 * DETECTANDO ERRORES GENERADOS EN UN SERVICIO REMOTO
*/

function hacerBusqueda(titulo){
    console.log("%c Título: ", "color: yellow; background-color:#222", titulo);

    let = `https://www.omdbapi.com/?s=${titulo}&apikey=${KEY_API}`;
    // let = `https://www.omdbapi.com/?s=${titulo}`;

    let estado;

    fetch(url)
        .then((respuesta) => {
            console.log(respuesta);

            if(!respuesta.ok){
                throw new Error(`No response.ok. Estado HTTP ${respuesta}`)
            }
            estado = respuesta.status;
        })
}