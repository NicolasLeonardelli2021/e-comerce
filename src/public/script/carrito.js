

// Elimina un producto del carrito
function borrarProducto(id_producto){
    fetch(`./carrito/${id_producto}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },        
    })
    .then(() =>{
        location.reload();
    } )
}

// Captura la cantidad del producto en el carrito y llama a la api Update

window.onload=function(){
    var mb = document.getElementById('formCantidad');
    mb.addEventListener('submit', function(e){
        e.preventDefault();
        let datos = new FormData(mb);
        let id = datos.get('prodId');
        let cant = {
            cantidad: datos.get('cantidad')
        }
        enviarDatos(cant,id)
    })
    }
        function enviarDatos(cant,id){
            fetch(`./carrito/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cant)
            })
            .then(() =>{
                location.reload();
            } )
        }

