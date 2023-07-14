function anadirBebida() {
	li = document.createElement("li");
	nombre = document.getElementById('nombreBebida').value;
	contenido = document.createTextNode(nombre);
	li.appendChild(contenido);
	//document.getElementById("listaBebidas").appendChild(li);
	lista=document.getElementById("listaBebidas");
	lista.appendChild(li);
}

function borrarBebida() {
	numero=Number(document.getElementById('numeroBebida').value)
	lista = document.getElementById('listaBebidas');
	x=lista.getElementsByTagName('li');
	x[numero-1].parentNode.removeChild(x[numero-1]);


}
function consultarBebida() {
	numero=Number(document.getElementById('numeroBebida1').value);
	lista = document.getElementById('listaBebidas');
	x=lista.getElementsByTagName('li');
	document.getElementById('demo').innerHTML += '<strong>Plato selecionado: </strong>'+x[numero-1].innerHTML+'<br>';
}

function anadirComida() {
	li = document.createElement("li");
	nombre = document.getElementById('nombreComida').value;
	contenido = document.createTextNode(nombre);
	li.appendChild(contenido);
	lista=document.getElementById("listaComidas");
	lista.appendChild(li);

}
function borrarComida() {
	numero=Number(document.getElementById('numeroComida').value)
	lista = document.getElementById('listaComidas');
	x=lista.getElementsByTagName('li');
	x[numero-1].parentNode.removeChild(x[numero-1]);
}
function consultarComida() {
	numero=Number(document.getElementById('numeroComida1').value);
	lista = document.getElementById('listaComidas');
	x=lista.getElementsByTagName('li');
	document.getElementById('demo').innerHTML += '<strong>Plato selecionado: </strong>'+x[numero-1].innerHTML+'<br>';
}

function anadirpostre() {
	li = document.createElement("li");
	nombre = document.getElementById('nombrepostre').value;
	contenido = document.createTextNode(nombre);
	li.appendChild(contenido);
	lista=document.getElementById("listapostre");
	lista.appendChild(li);

}
function borrarpostre() {
	numero=Number(document.getElementById('numeropostre').value)
	lista = document.getElementById('listapostre');
	x=lista.getElementsByTagName('li');
	x[numero-1].parentNode.removeChild(x[numero-1]);
}
function consultarpostre() {
	numero=Number(document.getElementById('numeropostre1').value);
	lista = document.getElementById('listapostres');
	x=lista.getElementsByTagName('li');
	document.getElementById('demo').innerHTML += '<strong>Plato selecionado: </strong>'+x[numero-1].innerHTML+'<br>';
}


