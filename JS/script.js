function validardatos() {
    /*Comentario*/

    //alert("Hola Mundo")
    //prompt("Ingrese su nombre")
    //console.log("HOLA MUNDO")
    //document.write("Hola Mundo")

    let nombre = document.getElementById('name').value

    if(nombre=="Cristhian"){
        alert('Bienvenido')
         }else{
             alert('No eres Bienvenido')
         }
    
         let email = document.getElementById('mail').value

            if(email=="notiene@notiene.com"){
                alert('Ingrese un correo valido')
            }else{
                alert('email correcto')
            }

    let edad = document.getElementById('edad').value
            if(edad < 18){
                alert('solo mayores de edad')
            }else{
                alert('continue llenando el formulario')
            }
    
    let telefono = document.getElementById('telefono').value
            if(telefono==""){
                alert('colocar un numero telefonico valido')
            }else{
                alert('telefono valido')
            }

}