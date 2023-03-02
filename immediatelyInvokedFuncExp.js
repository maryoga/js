//IIFE: Immediately Invoked Function Expression

//NO ES FUNCION IIFE
const sayHi = () => {
    console.log('Hola')
}
sayHi();

//Funcion IIFE
(() => {
    console.log('Hola')
})();


//Funcion IIFE haciendo fetch de un sitio web, estoy bajando una web
(async () => {
    const  response = await  fetch('http://midu.dev').then(res => res.text())
    console.log(response)
})();

