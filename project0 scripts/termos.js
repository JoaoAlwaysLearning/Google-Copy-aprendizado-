var inputPartTermos = document.getElementById("termosSub");
var menuDropTermos = document.getElementById("termosMenu");
var inputTermos = document.getElementById("termosInput");
var inputDivTermos = document.getElementById("termosDiv");
const optionsTermos = document.getElementsByClassName("optionsTermos");

const qlqrLugar = optionsTermos[0];
const  titulo = optionsTermos[1];
const texto = optionsTermos[2];
const URLs = optionsTermos[3];
const links = optionsTermos[4];

function mostrarTermos(){
    if(menuDropTermos.style["display"] == "none"){
        menuDropTermos.style["display"] = "block";
        inputDivTermos.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropTermos.style["display"] = "none";
        inputDivTermos.style["border-color"] = "#767676";
    }
}

inputDivTermos.addEventListener("click",mostrarTermos);

qlqrLugar.onclick = function(){
    inputTermos.setAttribute("value","any");
    inputPartTermos.textContent = "qualquer lugar da página";
}
titulo.onclick = function(){
    inputTermos.setAttribute("value","title");
    inputPartTermos.textContent = "no titúlo da página";
}
texto.onclick = function(){
    inputTermos.setAttribute("value","body");
    inputPartTermos.textContent = "no texto da página";
}
URLs.onclick = function(){
    inputTermos.setAttribute("value","url");
    inputPartTermos.textContent = "no URL da página";
}
links.onclick = function(){
    inputTermos.setAttribute("value","links");
    inputPartTermos.textContent = "em links para a página";
}
