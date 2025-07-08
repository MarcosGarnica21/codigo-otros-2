var formulario = document.querySelector("#form")
var lista = document.querySelector("#lista-de-invitados") //selecciona el contenedor del html que agregué
formulario.onsubmit = function(e) {

e.preventDefault(); //Corrección de sintaxis, evita que se reformule al recargar
  
var n = document.getElementById("name"); //cambien la sintaxis y vamos a acceder por su ID
var eInput = document.getElementById("age"); //coreccion de e a e input
var na = document.getElementById("nationality"); 

var nombre = n.value;
var edad = (parseInt(eInput.value)); //que lo convierte a numero cuando ingrese
  //var i = na.selectedIndex
var nacionalidad = na.options[na.selectedIndex].value;

  console.log(nombre, edad)
  console.log(nacionalidad)

  var hayErrores = false; // se necesita para controlar el if

  if (nombre.length === 0) {
    n.classList.add("error")
    hayErrores = true;
  } else {
    n.classList.remove("eror"); //si ya tiene error lo quitas
  }
  if (isNaN(edad) || edad < 18 || edad > 120) { //corrección de sintaxis
    eInput.classList.add("error"); //usar eInput
    hayErrores = true;
  } else {
    eInput.classList.remove("eror");
  }

  if (!hayErrorer){//si no hay error se agrega a lista
    agregarInvitado(nombre, edad, nacionalidad);
    formulario.rese(); //si todo es correcto reseta el formulario
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
/*
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
 */
//Mejor crear un objeto
  const nacionalidades ={ 
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana",
  };

//var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") //corección sintaxis de added
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")

spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}