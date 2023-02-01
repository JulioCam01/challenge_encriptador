//creacion de variables
const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  //limpiar el cuadro
  textArea.value = '';
  //quitar imagen
  mensaje.style.backgroundImage = 'none';
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  //limpiar el cuadro
  textArea.value = '';
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function btnCopiar() {
  var texto = document.querySelector('.mensaje');
  texto.select();
  texto.setSelectionRange(0, 99999);

  document.execCommand('copy');
  //limpiar el cuadro
  texto.value = '';
}
document.querySelector('#copy').addEventListener('click', copy);

function btnPegar() {
  var texto = document.querySelector('.text-area');
  texto.value = '';
  navigator.clipboard.readText().then((text) => {
    texto.value = text;
  });
}


