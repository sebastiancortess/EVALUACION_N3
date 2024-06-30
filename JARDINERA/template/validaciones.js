$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Limpiar todos los mensajes de error
        $(".error").remove();

        // Realizar las validaciones
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        if(rut === "" || rut.length < 9 || rut.length > 10){
            $("#rut").after('<span class="error text-danger">El Rut debe tener entre 9 y 10 caracteres.</span>');
        }

        if(nombre === "" || nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno === "" || apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno === "" || apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            $("#nombre").after('<span class="error text-danger">El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.</span>');
        }

        if(edad === "" || edad < 18){
            $("#edad").after('<span class="error text-danger">Debes ser mayor de edad para registrarte.</span>');
        }

        if(genero === ""){
            $("#genero").after('<span class="error text-danger">Por favor, seleccione un Género.</span>');
        }

        if(celular === "" || celular.length < 9 || celular.length > 12 || isNaN(celular)){
            $("#celular").after('<span class="error text-danger">El Celular debe tener entre 9 y 12 caracteres y ser numérico.</span>');
        }

        if($(".error").length == 0){
            alert("¡Registro exitoso!");
        }
    });
});