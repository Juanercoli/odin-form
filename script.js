function validatePassword() {
  	pass = document.getElementById('password');
  	confirm_pass = document.getElementById('confirm_password');
    pass_error = document.getElementsByClassName('error')[0];

    if (pass.value === confirm_pass.value) {
        // Limpiar errores si las contraseñas coinciden
        pass_error.style.visibility = 'hidden';
        pass.style.border = '1px solid #ccc';
        confirm_pass.style.border = '1px solid #ccc';
        return true;
    }

    // Mostrar errores si las contraseñas no coinciden
    pass_error.style.visibility = 'visible';
    pass.style.border = '2px solid red';
    confirm_pass.style.border = '2px solid red';
    return false;
}

