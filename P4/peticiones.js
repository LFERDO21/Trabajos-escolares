function cargar(){
    $(document).ready(function(){
        $.ajax({
            url:"datos.txt",
            type:"POST",
            success: function(respuesta){
                document.getElementById("datos").innerHTML = respuesta;
            },
            error:function(){
                console.log("No Fue  posible completar la operacion");
            }
        });
    });
}

let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);
