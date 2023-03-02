console.clear();

const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 4,
    },
    {
        precio: 22,
        cantidad: 1,
    },
]
const IVA = 1.21;

//const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA);

//const total = totalFactura.reduce((a, b) => a+b)
/*
const total = facturas.map(i => i.precio * i.cantidad * IVA).reduce((a,b) => {
    console.log(a,b)
    return a + b
})
 */

const total = facturas.map(i => i.precio * i.cantidad * IVA).filter(i => i > 40)
console.log(total);


