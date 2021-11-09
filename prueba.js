//Botón Guardar
let buttonGuardar = document.getElementById('guardar');

    buttonGuardar.addEventListener('click', function() {
        //alert('Botón de Guardar');
        let imputApellido = document.getElementById('apellido');

            if(imputApellido.value == ''){
                alert('Completar apellido!!');
            }
                else {
                    alert('Datos correctos');
                }
    });

//Botón Descartar
let buttonDescartar = document.getElementById('descartar');

    buttonDescartar.addEventListener('click', function() {  
        //alert('Botón de Descartar');
        let imput = document.getElementById('apellido');
        imput.value ='';
    });