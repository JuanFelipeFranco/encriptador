function encriptar(){
    // el getelementbyid obtiene el valor del input, este valor convierte las mayusculas en minuscula
    var frase = document.getElementById("inputTexto").value.toLowerCase();
    //i=toma en cuenta las letras en mayuscula y minuscula.
    //m=toma en cuenta toda la linea de la oracion.
    //g=toma en cuenta multiples lineas.
    var textoencriptado = frase.replace(/e/igm,"enter");
    var textoencriptado = textoencriptado.replace(/i/igm,"imes");
    var textoencriptado = textoencriptado.replace(/a/igm,"ai");
    var textoencriptado = textoencriptado.replace(/o/igm,"ober");
    var textoencriptado = textoencriptado.replace(/u/igm,"ufat");

    document.getElementById("imgmuneco").style.display="none";
    document.getElementById("texto").style.display="none";   
    document.getElementById("texto2").innerHTML = textoencriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function desencriptar(){
    // el getelementbyid obtiene el valor del input, este valor convierte las mayusculas en minuscula
    var frase = document.getElementById("inputTexto").value.toLowerCase();
    //i=toma en cuenta las letras en mayuscula y minuscula.
    //m=toma en cuenta toda la linea de la oracion.
    //g=toma en cuenta multiples lineas.
    var textoencriptado = frase.replace(/enter/igm,"e");
    var textoencriptado = textoencriptado.replace(/imes/igm,"i");
    var textoencriptado = textoencriptado.replace(/ai/igm,"a");
    var textoencriptado = textoencriptado.replace(/ober/igm,"o");
    var textoencriptado = textoencriptado.replace(/ufat/igm,"u");

    document.getElementById("imgmuneco").style.display="none";
    document.getElementById("texto").style.display="none";   
    document.getElementById("texto2").innerHTML = textoencriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio")
}