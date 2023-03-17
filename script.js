const texArea = document.querySelector(".text-area")
const textmensaje = document.querySelector(".mensaje-area")
/** 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

function btnEncriptar(){
  const textoEncriptado = encriptar(texArea.value);
  textmensaje.value = textoEncriptado;
  texArea.value ="";
  textmensaje.style.backgroundImage = "none";
}


function btnDesencriptar(){
  const textoEncriptado = desencriptar(texArea.value);
  textmensaje.value = textoEncriptado;
  texArea.value ="";
  textmensaje.style.backgroundImage = "none";
  
  
}

function copiarTexto() {
  
  textmensaje.select();
  document.execCommand("copy");
  alert("El texto ha sido copiado al portapapeles.");
}

function pasteClipboard() {
  navigator.clipboard.readText().then(text => {
    texArea.value=text
    textmensaje.value =""
    textmensaje.style.backgroundImage = `url("/images/muneco.png")`;
  });
}



function encriptar(stringEncriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }

return stringEncriptado;

}


function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }

return stringDesencriptado;

}






