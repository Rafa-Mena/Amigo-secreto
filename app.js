// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agregar amigos
let listaAmigos = [];

function agregarAmigo() {
  // Obtener el valor del input
  let nombreAmigo = document.querySelector("#amigo").value.trim();

  // Agregar el nombre a la lista usando push
  if (nombreAmigo === '') {
    alert('Ingresa un nombre');
    return;
  }

  listaAmigos.push(nombreAmigo);

  // Crear un nuevo elemento <li>
  let lista = document.querySelector("#listaAmigos");
  let nuevoAmigo = document.createElement("li");
  nuevoAmigo.textContent = nombreAmigo;
  lista.appendChild(nuevoAmigo);

  // Limpiar el campo para el siguiente nombre
  document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
  // Verificar si hay amigos en la lista
  if (listaAmigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }

  // Sorteo
  document.getElementById('listaAmigos').innerHTML = '';
  let sortearAmigo = Math.floor(Math.random() * listaAmigos.length);
  let amigoSecreto = listaAmigos[sortearAmigo];
  document.getElementById("resultado").innerHTML = `<span style="color: black;">El amigo secreto es:</span> ${amigoSecreto}`;
}