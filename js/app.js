const text = document.querySelector(
  "#generar-nombre > div > div:nth-child(1) > textarea"
);
const texto = document.querySelector(
  "#generar-nombre > div > div:nth-child(1) > textarea"
).value;
const botonEnviar = document.querySelector("#boton");

const divOculto = document.getElementById("ocultar");
document.addEventListener("DOMContentLoaded", vacio);
document
  .querySelector("#generar-nombre")
  .addEventListener("submit", cargarTraduccion);

//llamado a la funcion Ajax
function cargarTraduccion(e) {
  e.preventDefault();
  //le los campos seleccionados del formulario

  const formulario = document.querySelector("#generar-nombre");
  const idioma = document.getElementById("idioma");
  const idiomaSeleccionado = idioma.options[idioma.selectedIndex].value;
  const texto = document.querySelector(
    "#generar-nombre > div > div:nth-child(1) > textarea"
  ).value;
  const resultado = document.getElementById("resultado");

  let url = "";
  url += "https://api.funtranslations.com/translate/";

  if (idioma !== "" || texto !== "") {
    url += `${idiomaSeleccionado}.json?`;
    url += `text=${texto}`;
  }

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      divOculto.classList = "container resultado";
      console.log(data);
      resultado.innerText = `${data.contents.translated}`;
    });
}

//   //conectar con ajax
//   //iniciar XMLHTTPRequest
//   const xhr = new XMLHttpRequest();
//   // abrimos la conexion
//   xhr.open("GET", url, true);
//   //datos e impresion del template
//   xhr.onload = function () {
//     if (this.status === 200) {
//       divOculto.classList="container resultado"
//       const texto = JSON.parse(this.responseText);
//       resultado.innerText = `${texto.contents.translated}`;
//     } else {
//       divOculto.add.classList="container resultado"
//       resultado.innerText="se ha encontrado un imprevisto"
//       console.error();
//     }
//   };
//   xhr.send();
// }

function vacio() {
  divOculto.classList = "";
}

function comprobarVacio() {
  if (texto.length === 0 || texto !== "") {
    botonEnviar.disabled = true;
  }
  if (texto.length > 0) {
    botonEnviar.disabled = false;
  }
}
