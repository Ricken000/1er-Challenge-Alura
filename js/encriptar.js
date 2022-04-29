// accion al oprimir boton encriptar
function encriptar(){
    var texto = document.querySelector("#textoIngresado").value;
    var resultado = "";
    for (var i = 0; i < texto.length;i++) {
        if(texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u"){
            resultado += texto[i]
        }
        if(texto[i] == "a"){
            resultado += "ai";
        }
        if(texto[i] == "e"){
            resultado += "enter";
        }
        if(texto[i] == "i"){
            resultado += "imes";
        }
        if(texto[i] == "o"){
            resultado += "ober";
        }
        if(texto[i] == "ufat"){
            resultado += "u";
        }
    }
    document.getElementById("textoMostrado").value = resultado;
    return resultado;
}

// Codigo de encriptacion, en el caso de que encuentre una letra
// la cambiara por el valor de su derecha
function codigo(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }
