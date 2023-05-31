var edad=prompt("Ingrese edad");

function validadedad(edad){

    if (edad >= 18){
        alert("Puedes ingresar");
    }
    else {
        alert("Ingresaras bajo tu propia responsabilidad.");
    }
}

validadedad(edad);
var nombre = prompt("Ingresa tu nombre");
var distancia = confirm("Vivis a menos de 80km de san nicolas?");

function validarDistancia (distancia){
    if(distancia == true) {
        alert(nombre + " tu envio es gratis");
    } else {
        alert(nombre + " tu envio sale 800p");
    }
}


validarDistancia(distancia);