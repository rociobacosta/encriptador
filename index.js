/*
function encriptar(){
  let tituloMensaje = document.getElementById("mensaje-principal");
  let parrafo = document.getElementById("mensaje-secundario");
  let munieco = document.getElementById("munieco");
  let textoCifrado = document.getElementById("texto").value   
                      .replace(/a/gi, "ai")
                      .replace(/e/gi, "enter")
                      .replace(/i/gi, "imes")
                      .replace(/o/gi, "ober")
                      .replace(/u/gi, "ufat");

  if ( document.getElementById("texto").value.length != 0) {
    // document.getElementById("texto").value= textoCifrado;
    parrafo.textContent = "";
    tituloMensaje.innerText = textoCifrado;
    munieco.style.display = "none";
  }else{
    alert("Debes ingresar algún texto");
  }
  
}
*/

///////////////////
let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector("#munieco");
let contenedor = document.querySelector(".mensaje");
let resultado = document.querySelector(".texto-resultado");
let botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".textarea")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    botonCopiar.classList.remove("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

botonCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
