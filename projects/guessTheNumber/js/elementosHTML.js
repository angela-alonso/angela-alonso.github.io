/**
 * 
 */
var usuarios = [];
function pantallaNueva() {
	document.getElementById("inicio").remove();
	var formularioNumero = document.createElement("form");
	formularioNumero.id = "formularioNumeros";
	
	var style = document.createElement("h4");
	var labelNumero = document.createTextNode("Introduce un número del 1 al 100: ");
			
	var inputNumero = document.createElement("input");
	inputNumero.type = "text";
	inputNumero.id = "intentoNumero";
			
	style.appendChild(labelNumero);
	style.appendChild(inputNumero);
			
	var botonJugada = document.createElement("button");
	botonJugada.innerHTML = "JUGAR"
	botonJugada.type = "button";
	botonJugada.id = "adivinar";
	
	style.appendChild(botonJugada);
	formularioNumero.appendChild(style);
	
	var pista = document.createElement("p");
	pista.id = "pista";
	document.body.appendChild(formularioNumero);
	document.body.appendChild(pista);
	
}
 
function pantallaFinal() {
	document.getElementById("formularioNumeros").remove();
	var div = document.createElement("div");
	var h2 = document.createElement("h2");
	h2.innerHTML = "! Felicidades " + nombre + " ¡";
	div.appendChild(h2);
	 
	var tabla = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	tabla.appendChild(thead);
	tabla.appendChild(tbody);
	tabla.style.cssText = "text-align: center; padding: 1% 1% 1% 1%; border: 1px double black;width: 50%; margin-left: 25%";
	thead.style.cssText = "font-family: math; font-size: medium; background-color: rgb(201, 201, 201);";
	tbody.style.cssText = "border: 1px double black;";
	
	var tr = thead.insertRow(0);
	var thNombre = tr.insertCell(0);
	var thRecord = tr.insertCell(1);
	var thPartidasJ = tr.insertCell(2);
	 
	thNombre.innerText = "Nombre";
	thRecord.innerText = "Record";
	thPartidasJ.innerHTML = "Partidas Jugadas";
	
	var jugadores = JSON.parse(localStorage.getItem("jugadores"));
	if (jugadores==null) {
		user = {
			nombre : nombre,
			record : contador, 
			jugadas : 1 
		};
		usuarios.push(user);
	}
	else {
		for (var i=0; i<jugadores.length; i++) {
			if(jugadores[i].nombre === nombre) {
				jugadores[i].jugadas++;
				if (jugadores[i].record < contador) {
					jugadores[i].record = contador;
				}
			}
			else {
				user = {
					nombre : nombre,
					record : contador, 
					jugadas : 1 
				};
				usuarios.push(user);
			}
			usuarios.push(jugadores[i]);
		}		
	}
	localStorage.setItem("jugadores", JSON.stringify(usuarios));
	
	for (var i=0; i<usuarios.length; i++) {
		var row = tbody.insertRow(i);

		var tdNombre = row.insertCell(0);
		tdNombre.innerHTML = usuarios[i].nombre;
		var tdRecord = row.insertCell(1);
		tdRecord.innerHTML = usuarios[i].record;
		var tdPartidasJ = row.insertCell(2);
		tdPartidasJ.innerHTML = usuarios[i].jugadas;
		
		tbody.appendChild(row)
	}
	
	var VolverAJugar = document.createElement("a");
	VolverAJugar.innerHTML = "Volver a Jugar"
	VolverAJugar.href = "index.html";
	VolverAJugar.id = "volverAJugar";
	VolverAJugar.style.cssText = "margin-top: 2%; width: 50%; font-size: large";
	
	document.body.appendChild(div);
	document.body.appendChild(tabla);
	document.body.appendChild(VolverAJugar);
 }