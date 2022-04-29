function filtrar(x){
    var filtro = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z"];
    var letraComprobada = true
    for(var j = 0; j < x.length; j++){
        for (var k = 0; k < filtro.length; k++){
            if (x[j] == filtro[k]){
                letraComprobada = true;
                break;
            }
            else{
                letraComprobada = false;
            }
        }
        if (!letraComprobada){
            alert("Solo se aceptan letras minusculas y sin caracteres especiales.");
            break;
        }
    }
}