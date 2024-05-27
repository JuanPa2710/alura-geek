async function mostrarProductos() {
    const con = await fetch("http://localhost:3001/productos")

    const conConvertida = await con.json()
    
    return conConvertida
}

export const conexionAPI = {
    mostrarProductos
}   