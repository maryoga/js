//veremos como crear una promesa
new Promise((resolve, reject) => {
    resolve(5)
    reject(new Error())
});

const toNumber = n => Number(n);
//const multiply = n => n * 2;
const multiply = n => {
    console.log("Multiply", n);
    if(n > 10) throw new Error("Error");
    return n * 2;
}
const print = n => console.log(n);
const catchAndPrint = (err) => {
    console.log(err);
    return 1;
}

const request = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url);

        req.onload = () => {
            if (req.status === 200){
                resolve(req.responseText);
            }
            else{
                reject(new Error('Error al cargar'));
            }
        }
        req.onerror = () => {
            reject(new Error("Error de red"));
        }
        req.send();
    })
};
//request("./numero.txt").then((data) => console.log(data));
request("./numero.txt")
    .then(toNumber)
    .then(multiply)
    .then(multiply)
    .then(multiply)
    .catch(catchAndPrint)
    .then(multiply)
    .then(multiply)
    .then(print)
    .catch(catchAndPrint);