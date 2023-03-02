let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter(persona => persona.edad <= 3)

console.log(pequeños);



//Filtro por contexto en 2do parametro - Edades entre 13 y 19 años del Array Persona

let personas = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 15},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 16},
    {nombre: "george", edad: 18},
];

let rango = {
    bajo: 13,
    alto: 16
};


let jovenes = personas.filter(function(persona) {
    return persona.edad >= this.bajo && persona.edad <= this.alto;
}, rango)

console.log(jovenes)