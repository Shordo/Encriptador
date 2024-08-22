let textExist = false;
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('output-text').innerText = "Texto encriptado/desencriptado aparecerá aquí...";
        textExist = false;
        
    }else{
        /*
            conversion de la cadena de texto
        */
        /* const encryptText = inputText;*/
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        document.getElementById('output-text').style.margin = '26px 0px';
        textExist = true;
    }
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('output-text').innerText = "Texto encriptado/desencriptado aparecerá aquí...";
        textExist = false;
    }else{
        /*
            desconversion de la cadena de texto
        */
        /*const decryptedText = inputText.value; */
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        textExist = true;
    }
}

function copyText() {
    if(textExist){
        const outputText = document.getElementById('output-text').value;
        navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
    }
    console.log(textExist);    
}
