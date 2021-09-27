function validar_contrasena(string){    

    if (string.length >= 6) {
        //alert("La contraseña debe tener al menos 6 caracteres"); 
        //console.log(false);
        return true;
    }

    if (string.search(/[!"#$%&/()=*'{}<>]/) > 0) {
        //alert("La contraseña no debe contener caracteres especiales"); 
        //console.log(false);
        return false;
    }

    if (string.search(/[a-z]/i) < 0) {
        //alert("La contraseña debe tener al menos una letra");
        //console.log(false);
        return false;
    }

    if (string.search(/[0-9]/) < 0) {
        //alert("La contraseña debe tener al menos un número"); 
        //console.log(false);
        return false;
    }

    //console.log(true);
    return true;

}

//module.exports.validar_contrasena = validar_contrasena;