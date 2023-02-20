const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();

    const {name, email, password} = event.target;

    console.log(name.value, email.value, password.value);

    if(name.value.length === 0) alert("El nombre no es valido");
};

form.addEventListener("submit", enviarFormulario)

const section = document.querySelector("#seccion");
const titulo2 = document.querySelector("#titulo2");

titulo2.addEventListener("click", (event) =>{
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);

    console.log("Clic en el Titulo");
});

section.addEventListener("click", () =>{
    console.log("Clic en la Sección");
});