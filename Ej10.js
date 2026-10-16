//Escribe un programa que determine si un número dado es primo. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Muestra el resultado por pantalla.
let numero = 13;
let esPrimo = true;
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo) {
    console.log("El número " + numero + " es primo.");
} else {
    console.log("El número " + numero + " no es primo.");
}