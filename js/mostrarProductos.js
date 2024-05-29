import { conexionAPI } from "./conexion.js";
import { eliminar } from "./eliminarProductos.js";


const lista = document.querySelector("[data-productos]");

export default function crearProducto(nombre, precio, imagen, id) {
    const producto = document.createElement("li")
    producto.className = "producto"
    producto.innerHTML = `
    <img class="img-producto" src="${imagen}}" alt="Imagen del producto">
    <h3 class="descripcion-producto">${nombre}</h3>

    <div>
        <p class="precio-producto">$ ${precio}</p>
        <img class="icono-eliminar" src="icons/icon-delete.svg" alt="Icono eliminar" data-id='${id}'>
    </div>
    `

    const iconoEliminar = producto.querySelector('.icono-eliminar');
    iconoEliminar.addEventListener("click", () => { eliminar.borrarProducto(iconoEliminar.dataset.id) })
    
    return producto
}

async function obtenerProductos() {
    try {
        const listaProductos = await conexionAPI.mostrarProductos()
        console.log(listaProductos)

        listaProductos.forEach(producto => {
            lista.appendChild(crearProducto(producto.nombre, producto.precio, producto.imagen, producto.id))        
        });
    } catch (e){
        console.log(e)
        lista.innerHTML = `<h2 class='msg'>Hubo un problema con la conexión :(</h2>`
    }
}

obtenerProductos()

