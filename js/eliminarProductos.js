import { conexionAPI } from "./conexion.js";    

function borrarProducto(idEliminar) {    
    try {
        conexionAPI.eliminarProducto(idEliminar)
        window.location.href = "../index.html"
    } catch (error) {
        console.log(error);
    }
    
}

export const eliminar = {
    borrarProducto
}