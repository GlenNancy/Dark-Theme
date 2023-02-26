function dark(){
    let body = document.querySelector('body');
    let botao = document.querySelector("#chamada");
    botao.setAttribute('class', 'botao2');
    botao.setAttribute('onclick', 'light()');
    body.style.backgroundColor = "rgb(32, 32, 32)";
    botao.innerHTML = 'Light';
}

function light(){
    let body = document.querySelector('body');
    let botao = document.querySelector("#chamada");
    botao.setAttribute('class', 'botao');
    botao.setAttribute('onclick', 'dark()');
    body.style.backgroundColor = "white";
    botao.innerHTML = 'Dark';
}