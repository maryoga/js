const toNumber = n => Number(n);
const multiply = n => n * 2;
const print = n => console.log(n);

const thenFn = (n) => {
    let number = toNumber(n);
    number = multiply(number);
    print(number);
}

const thenAlt = (n) => console.log(n);
const catchAndPrint = (err) => console.log(err);

const request = (url, then, catchFn) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
        if (req.status === 200){
            then(req.responseText);
        }
        else{
            catchFn(new Error('Error al cargar'));
        }
    }
    req.onerror = () => {
        catchFn(new Error("Error de red"));
    }
    req.send();
};
//pasamos or parametro el archivo y la función CallBack "thenFn"
//request("./numero.txt", thenFn, catchAndPrint);
request("./numero.txt", thenAlt, catchAndPrint);


