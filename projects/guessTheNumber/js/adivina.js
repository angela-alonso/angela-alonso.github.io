/**
 *  
 */
var nombre;
document.getElementById("comenzar").addEventListener("click", Juego);
var numeroAleatorio;
var contador;

function Juego() {
	nombre = document.getElementById("jugador").value;

	numeroAleatorio = aleatorio();
	contador = 1;
	
	pantallaNueva(); //Llama a función que crea los nuevos elementos HTML
	document.getElementById("adivinar").addEventListener("click", comprobarJugada);

	console.log(numeroAleatorio);	
}

function aleatorio() {
	return Math.floor((Math.random() * (100 - 1 + 1)) + 1);
}

function comprobarJugada() {
  	var valorInput = document.getElementById("intentoNumero");
  	numero = parseInt(valorInput.value);
	var pista = document.getElementById("pista");
	
  	if (numero >= 1 && numero <= 100) {
		fin = true;
    	intento = numero;
    	if (intento === numeroAleatorio) {
			fin = false;
			pista.remove();
			pantallaFinal();
		}
		else {
			contador++;
			
			if (intento < numeroAleatorio) {
				pista.innerHTML = "PISTA: El numero secreto es mayor que el introducido";
			}
			else {
				pista.innerHTML = "PISTA: El numero secreto es menor que el introducido";
			}
		}
    	valorInput.value = "";
    	console.log(contador);
  	}
  	else {
		fin = false;
		document.getElementById("formularioNumeros").remove();
		var malJugado = document.createElement("h4");
		malJugado.innerHTML = "Lo siento, no has jugado correctamente";
		document.body.appendChild(malJugado);
	}
}