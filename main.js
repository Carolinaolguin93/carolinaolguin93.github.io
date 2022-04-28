/*************** ENCRIPTAR *************************/

var btnencriptar = document.getElementById("encriptar");

btnencriptar.addEventListener('click', encriptar);

function encriptar(){
    var texto = (document.getElementById("texto").value).toLowerCase();
    if(texto == ""){
        alert("Olvidaste ingresar el texto que quieres encriptar!");
    }else{
    var textoEncriptado = "";
    for(let indice of texto){
        if(indice == "a"){
            textoEncriptado += "ai";
        }else if(indice == "e"){
            textoEncriptado += "enter";
        }else if(indice == "i"){
            textoEncriptado += "imes";
        }else if(indice == "o"){
            textoEncriptado += "ober";
        }else if(indice == "u"){
            textoEncriptado += "ufat";
        }else{
            textoEncriptado += indice;
        }
    }
    document.getElementById("texto").value = "";
    cambiarDiv();
    cambiarTexto(textoEncriptado);
}
}

function cambiarDiv(){
    (document.getElementById("contenedorResultado")).style.display = "none";
    (document.getElementById("resultadoOculto")).style.display = "block";

}

function cambiarTexto(texto){
    (document.getElementById("textoEncriptado")).textContent = texto;
}

/***************  DESENCRIPTAR *************************/

var btndesencriptar = document.getElementById("desencriptar");

btndesencriptar.addEventListener('click', desencriptar);

function desencriptar(){
    var textoEncr = (document.getElementById("texto").value).toLowerCase();
    if(textoEncr == ""){
        alert("Olvidaste ingresar el texto!");
    }else{
    var textoDesencriptado = "";
    for(let i = 0; i < textoEncr.length ; i++){
        if(textoEncr[i] == "a"){
            textoEncr = textoEncr.replace('ai','a');
        }else if(textoEncr[i] == "e"){
            textoEncr = textoEncr.replace('enter','e');
        }else if(textoEncr[i] == "i"){
            textoEncr = textoEncr.replace('imes','i');
        }else if(textoEncr[i] == "o"){
            textoEncr = textoEncr.replace('ober','o');
        }else if(textoEncr[i] == "u"){
            textoEncr = textoEncr.replace('ufat','u');
        }
    }
    document.getElementById("texto").value = "";
    cambiarDiv();
    cambiarTexto(textoEncr);
    }
}

/***************  BOTON COPIAR *************************/

var btncopiar = document.getElementById("copiar");

btncopiar.addEventListener('click', copiar);

function copiar() {
    var copy = document.getElementById("textoEncriptado").textContent;
    var aux = document.createElement("input");
      aux.setAttribute("value", copy);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);

    document.getElementById("textoEncriptado").textContent = " ";
}