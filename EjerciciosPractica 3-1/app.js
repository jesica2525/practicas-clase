let numero = parseInt(prompt("Ingrese un numero"));
let sumador = parseInt(prompt("¿Que numero desea sumarle?"));
let cantidad = parseInt(prompt("¿Cuantas veces quiere realizar esta accion?"));

resultado = sumador + numero; 
let total = 0;

for (let i = 1; i <= cantidad; i++) {
    total += resultado;
    alert(`${total}`);
}
