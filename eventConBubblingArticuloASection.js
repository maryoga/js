const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    const {name, email, password} = event.target;
    console.log(name.value, email.value, password.value);
    if(name.value.length === 0) alert("El nombre no es valido");
};

form.addEventListener("submit", enviarFormulario);

const section = document.querySelector("#seccion");
const titulo2 = document.querySelector("#titulo2");

titulo2.addEventListener("click", () => {
    console.log("Clic en el Titulo");
});
section.addEventListener("click", () =>{
    console.log("Click en Seccion");
},
    {
        capture: true,
    }
    );