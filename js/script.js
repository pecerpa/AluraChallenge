const textareaInput = document.getElementById('input');
const textareaOutput = document.getElementById('output');
const outputSection = document.getElementById('output-section');

function btnEncriptar() {
    textareaOutput.value = "";
    const textoEncriptado = encriptar(textareaInput.value);
    textareaOutput.value = textoEncriptado;
    outputSection.style.backgroundImage = 'url(images/binary-animation.gif)';
    outputSection.style.backgroundSize = '450px 700px'
    if(textareaOutput.value == '') { 
        outputSection.style.backgroundImage = 'url(images/carga-imagen.gif)';
        outputSection.style.backgroundSize = '400px 400px'
    };
    textareaInput.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textareaInput.value);
    textareaOutput.value = textoDesencriptado;
    outputSection.style.backgroundImage = 'url(images/binary-animation.gif)';
    outputSection.style.backgroundSize = '450px 700px'
    if(textareaOutput.value == '') { 
        outputSection.style.backgroundImage = 'url(images/carga-imagen.gif)';
        outputSection.style.backgroundSize = '400px 400px'
    }
    textareaInput.value = "";
    
}

function copiar() {
    var aux = document.createElement("input");
    aux.setAttribute("value", textareaOutput.value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    }

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}



