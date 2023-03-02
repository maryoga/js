console.clear();
let equipo = [
    {
        nombre: "aaron",
        posicion: "developer"
    },
    {
        nombre: "beth",
        posicion: "ui designer"
    },
    {
        nombre: "cara",
        posicion: "developer"
    },
    {
        nombre: "daniel",
        posicion: "content manager"
    },
    {
        nombre: "ella",
        posicion: "cto"
    },
    {
        nombre: "fin",
        posicion: "backend engineer"
    },
    {
        nombre: "george",
        posicion: "developer"
    },

]

let desarrolladores = equipo.filter(miembro => miembro.posicion !== "developer")

console.log(desarrolladores);


