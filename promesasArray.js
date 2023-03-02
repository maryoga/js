//partimos de una Web que hace 3 solicitudes a una misma App. Sera un listado, una agrupación de Solicitudes
const promise1 = fetch("https://rickandmortyapi.com/api/character/?name=cowboy%20rick")
    .then((response) => response.json())
    .then((data) => data.results[0]);

const promise2 = fetch("https://rickandmortyapi.com/api/character/?name=cult%20leader%20morty")
    .then((response) => response.json())
    .then((data) => {throw new Error('Error boom')});

const promise3 = fetch("https://rickandmortyapi.com/api/character/?name=daron%20jefferson")
    .then((response) => response.json())
    .then((data) => data.results[0]);

Promise.any([promise1, promise2, promise3]).then((firstToResolve) =>
    console.log(firstToResolve)
);