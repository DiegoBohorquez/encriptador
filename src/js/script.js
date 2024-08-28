const panelEncriptado = document.querySelector(
  ".encriptador__encriptado__contenido"
);
const warning = document.querySelector(".encriptador__warning");
const btnEncriptar = document.querySelector("#boton-encriptar");
const btnDesencriptar = document.querySelector("#boton-desencriptar");
const btnCopiar = document.querySelector("#boton-copiar");
const textoEncriptar = document.querySelector("#textarea");
const contenedorEncriptados = document.querySelector("#contenedorTexto");
const tituloContenedor = document.querySelector("#tituloContenedor");
const imagen = document.querySelector(".encriptador__encriptado__imagen");
document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});

function eventListeners() {
  btnEncriptar.addEventListener("click", encriptar);
  btnDesencriptar.addEventListener("click", desencriptar);
  btnCopiar.addEventListener("click", copiar);
}

function encriptar() {
  let texto = textoEncriptar.value;
  texto = texto.toLowerCase();

  if (texto === "") {
    alerta("El Encriptador esta vacio", "error");
    return;
  }

  alerta("Mensaje Encriptado con exito", "exito");

  añadir("Encriptado");

  limpiarTextArea();

  if (btnCopiar.classList.contains("hidden")) {
    btnCopiar.classList.remove("hidden");
  }

  imagen.style.display = "none";
}

function desencriptar() {
  let texto = textoEncriptar.value;

  if (texto === "") {
    alerta("El Desencriptador esta vacio", "error");
    return;
  }

  alerta("Mensaje Desencriptado con exito", "exito");

  añadir("Desencriptado");

  limpiarTextArea();

  imagen.style.display = "none";

  if (btnCopiar.classList.contains("hidden")) {
    btnCopiar.classList.remove("hidden");
  }
}

function copiar() {
  let texto = contenedorEncriptados.innerHTML;
  
  navigator.clipboard.writeText(texto);

  alerta('Mensaje Copiado Con Exito', 'exito')
}

function alerta(texto, referencia) {
  const alerta = document.querySelector(`.${referencia}`);

  if (referencia === "error" && !alerta) {
    setTimeout(() => {
      const advertencia = document.createElement("P");

      advertencia.classList.add("error");
      advertencia.textContent = `${texto}`;
      warning.after(advertencia);

      setInterval(() => {
        advertencia.remove();
      }, 3000);
    });
  }

  if (referencia === "exito" && !alerta) {
    setTimeout(() => {
      const advertencia = document.createElement("P");

      advertencia.classList.add("exito");
      advertencia.textContent = `${texto}`;
      warning.after(advertencia);

      setInterval(() => {
        advertencia.remove();
      }, 3000);
    });
  }
}

function añadir(titulo) {
  tituloContenedor.textContent = titulo;
  contenedorEncriptados.textContent = textoEncriptar.value;
}

function limpiarTextArea() {
  textoEncriptar.value = "";
}
