let textExist = false;
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('h2').style.display = 'flex';
        document.getElementById('p').style.display = 'flex';
        textExist = false;

    }else{
        /*
            conversion de la cadena de texto
        */
        /* const encryptText = inputText;*/
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('p').style.display = 'none';
        document.getElementById('output-text').style.margin = '26px 0px';
        textExist = true;
    }
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('h2').style.display = 'flex';
        document.getElementById('p').style.display = 'flex';
        textExist = false;
    }else{
        /*
            desconversion de la cadena de texto
        */
        /*const decryptedText = inputText.value; */
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('p').style.display = 'none';
        document.getElementById('output-text').style.margin = '26px 0px';
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
