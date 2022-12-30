var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munheco = document.querySelector(".munheco");
var subtitulo = document.querySelector(".subtitulo");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".text-resultado");
var texto = document.querySelector(".text-resultado");



//var botonCopiar = document.querySelector(".btn-copiar");
document.querySelector(".btn-copiar").addEventListener("click",()=>{
    copiarPortapapeles(texto);
})

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function copiarPortapapeles(texto){
    const inputOculto = document.createElement('input');
    inputOculto.setAttribute('value', texto.innerText);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
    alert("Su texto se a copiado");
}


function encriptar(){
    ocultarAdelante();
    resultado.textContent = encriptadoTexto(recuperarTexto());
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}


function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante() {
    alert("Si entra");
    munheco.classList.add("ocultar");
    subtitulo.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptadoTexto(mensaje){
    var texto = mensaje;
    var textoF = "";
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoF = textoF + "enter";
        }
        else if(texto[i] == "i" ){
            textoF = textoF + "imes";
        }
        else if(texto[i] == "a" ){
            textoF = textoF + "ai";
        }
        else if(texto[i] == "o"){
            textoF = textoF + "ober";
        }
        else if(texto[i] == "u"){
            textoF = textoF + "ufat";
        }
        else{
            textoF = textoF + texto[i];
        }
        
    }
    return textoF;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoF = "";
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoF = textoF + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoF = textoF + "i";
            i = i+3;
        }
        else if(texto[i] == "a"){
            textoF = textoF + "a";
            i = i+1;
        }
        else if(texto[i] == "o"){
            textoF = textoF + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoF = textoF + "u";
            i = i+3;
        }
        else{
            textoF = textoF + texto[i];
        }
        
    }
    return textoF;
}