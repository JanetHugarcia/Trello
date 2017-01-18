
//obteniendo elementos
var itemTarget = document.getElementsByClassName(
	"Tarjeta");
var itemList1 = document.getElementById("lista1");
var itemList2 = document.getElementById("lista2");
function allowDrop(e) {
    e.preventDefault();
}
function drag(e){
	e.dataTransfer.setData("text", e.target.id);
}

function drop(e){
	e.preventDefault();
	var data = e.dataTransfer.getData("text");

	e.target.appendChild(document.getElementById(data));
}

/