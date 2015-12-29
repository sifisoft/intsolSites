function CojerValorCookie(indice) {
	//indice indica el comienzo del valor
	var galleta = document.cookie
	//busca el final del valor, dado por ;, a partir de indice
	var finDeCadena = galleta.indexOf(";", indice)
	//si no existe el ;, el final del valor lo marca la longitud total de la cookie
	if (finDeCadena == -1)
		finDeCadena = galleta.length

	return unescape(galleta.substring(indice, finDeCadena))
	}

function CojerCookie(nombre) {
	var galleta = document.cookie
	//construye la cadena con el nombre del valor
	var arg = nombre + "="
	var alen = arg.length			//longitud del nombre del valor
	var glen = galleta.length		//longitud de la cookie

	var i = 0
	while (i < glen) {
		var j = i + alen			//posiciona j al final del nombre del valor
		if (galleta.substring(i, j) == arg)	//si en la cookie estamo ya en nombre del valor		
			return CojerValorCookie(j)	//devuleve el valor, que esta a partir de j

		i = galleta.indexOf(" ", i) + 1		//pasa al siguiente
		if (i == 0)
			break				//fin de la cookie
	}
	return null					//no se encuentra el nombre del valor
}

function GuardarCookie (nombre, valor, caducidad) {
	if(!caducidad)
		caducidad = Caduca(0)

	//crea la cookie: incluye el nombre, la caducidad y la ruta donde esta guardada
	//cada valor esta separado por ; y un espacio
	document.cookie = nombre + "=" + escape(valor) + "; expires=" + caducidad + "; path=/"
}

function Caduca(dias) {
	var hoy = new Date()										//coge la fecha actual
	var msEnXDias = eval(dias) * 24 * 60 * 60 * 1000	//pasa los dias a mseg.

	hoy.setTime(hoy.getTime() + msEnXDias)			//fecha de caducidad: actual + caducidad
	return (hoy.toGMTString())
}

function BorrarCookie(nombre) {
	//para borrar la cookie, se le pone una fecha del pasado mediante Caduca(-1)
	document.cookie = nombre + "=; expires=" + Caduca(-1) + "; path=/"
}

function IntroducirCookie(nombre) {
	//establece la cookie: la caducidad es de 31 dias
	var _31dias = Caduca(31)				//crea la fecha de caducidad si 31 dias
	if (nombre != "") 
		GuardarCookie("Nombre", nombre, _31dias)
}

function MostrarCookie(nombre, formulario) {
	if(CojerCookie(nombre) != null)
		formulario.nombre.value = CojerCookie(nombre)
}

function MostrarMiCookie() {
	MostrarCookie('Nombre', document.cookies)
}


window.onload = MostrarMiCookie;
if (document.captureEvents) {				//N4 requiere invocar la funcion captureEvents
	document.captureEvents(Event.LOAD)
}
