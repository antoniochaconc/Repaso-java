/* Ejercicio 3: Determinar si un número es primo

Solicita un número y muestra si es primo. */

const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

interfaz.question("Ingresa un número: ", (respuesta) => {
	const numero = Number(respuesta);
	let esPrimo = Number.isInteger(numero) && numero >= 2;

	for (let divisor = 2; esPrimo && divisor * divisor <= numero; divisor++) {
		if (numero % divisor === 0) {
			esPrimo = false;
		}
	}

	console.log(esPrimo ? "El número es primo." : "El número no es primo.");
	interfaz.close();
});