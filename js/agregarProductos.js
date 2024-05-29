import { tiposError, mensajes } from "./errores.js"
import { conexionAPI } from "./conexion.js";

const campoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-form-agregar]");
const botonEnviar = document.querySelector("#btn-enviar");
const botonLimpiar = document.querySelector("#btn-limpiar")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()     

    const listaResp = {
        nombre: e.target.elements['nombre'].value, 
        precio: e.target.elements['precio'].value, 
        imagen: e.target.elements['imagen'].value
    }    

    conexionAPI.agregarProducto(listaResp["nombre"], listaResp["precio"], listaResp["imagen"])
    window.location.href = "../index.html"
})

campoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

botonEnviar.addEventListener("click", () => {
    campoFormulario.forEach((campo) => {
        verificarCampo(campo)
    })
})

botonLimpiar.addEventListener("click", () => {
    campoFormulario.forEach((campo) => {
        campo.value = ""
    })
})

function verificarCampo(campo) {
    let mensaje = ""
    campo.setCustomValidity("")

    tiposError.forEach(error => {
        if(campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
        }
    });

    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const validarInputCheck = campo.checkValidity();

    if( !validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = ""
    }
};