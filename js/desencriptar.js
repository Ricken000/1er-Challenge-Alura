// accion al oprimir boton desencriptar
function desencriptar(){
    var texto = document.querySelector("#textoIngresado").value;
    var resultado = '';
    for (var i = 0; i < texto.length;i++) {
        if(texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u"){
            resultado += texto[i]
        }
        if(texto[i] == "a" && texto[i + 1] == "i"){
            resultado += "a";
            i += 1;
        }
        if(texto[i] == "e" && texto[i + 4] == "r"){
            resultado += "e";
            i += 4;
        }
        if(texto[i] == "i" && texto[i + 3] == "s"){
            resultado += "i";
            i += 3;
        }
        if(texto[i] == "o" && texto[i + 3] == "r"){
            resultado += "o";
            i += 3;
        }
        if(texto[i] == "u" && texto[i + 3] == "t"){
            resultado += "u";
            i += 3;
        }
    }
    document.getElementById("textoMostrado").value = resultado;
    return resultado;
}