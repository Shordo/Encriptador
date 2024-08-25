let textExist = false;
function encryptText() {
    let inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('h2').style.display = 'flex';
        document.getElementById('p').style.display = 'flex';
        document.getElementById('output-text').style.display = 'none';
        textExist = false;
    }else{
        inputText = inputText.replace(/e/g, "enter");
        inputText = inputText.replace(/i/g, "imes");
        inputText = inputText.replace(/a/g, "ai");
        inputText = inputText.replace(/o/g, "ober");
        inputText = inputText.replace(/u/g, "ufat");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('p').style.display = 'none';
        document.getElementById('output-text').style.display ='flex';
        textExist = true;
    }
}

function decryptText() {
    let inputText = document.getElementById('input-text').value;
    if (inputText == '') {
        console.log("texto vacio");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'flex';
        document.getElementById('h2').style.display = 'flex';
        document.getElementById('p').style.display = 'flex';
        document.getElementById('output-text').style.display = 'none';
        textExist = false;
    }else{
        inputText = inputText.replace(/enter/g, "e");
        inputText = inputText.replace(/imes/g, "i");
        inputText = inputText.replace(/ai/g, "a");
        inputText = inputText.replace(/ober/g, "o");
        inputText = inputText.replace(/ufat/g, "u");
        document.getElementById('output-text').innerText = inputText;
        document.getElementById('image-output').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('p').style.display = 'none';
        document.getElementById('output-text').style.display ='flex';
        textExist = true;
    }
}

function copyText() {
    if(textExist){
        let outputText = document.getElementById('output-text').value;
        navigator.clipboard.writeText(outputText);
    }
}


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/