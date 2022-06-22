let numero = parseInt(prompt("Ingrese un numero"));

const numMin = 10;
const numMax = 50;

if ((numero >= numMin) && (numero <= numMax)){
    alert("El numero ingresado esta entre " + numMin + " y " + numMax)
} else {
    console.log("El numero ingresado no esta entre " + numMin + " y " + numMax)
}
