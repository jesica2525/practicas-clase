
let texto = prompt("Ingrese texto o escriba ´ESC´ para salir");
let salida = " "

while (texto != "ESC" && texto != "esc") {
    salida += texto + " ";
    texto = prompt("Ingrese texto o escriba ´ESC´ para salir")   
}
alert (`El texto ingresado es: ${salida}`)
