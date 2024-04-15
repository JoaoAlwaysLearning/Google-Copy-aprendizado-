var inputPartDireitos = document.getElementById("direitosSub");
var menuDropDireitos = document.getElementById("direitosMenu");
var inputDireitos = document.getElementById("direitosInput");
var inputDivDireitos = document.getElementById("direitosDiv");
const optionsDireitos = document.getElementsByClassName("optionsDireitos");

const qlqrDireitos = optionsDireitos[0];
const uso1 = optionsDireitos[1];
const uso2 = optionsDireitos[2];
const uso3 = optionsDireitos[3];
const uso4 = optionsDireitos[4];

function mostrarDireitos(){
    if(menuDropDireitos.style["display"] == "none"){
        menuDropDireitos.style["display"] = "block";
        inputDivDireitos.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropDireitos.style["display"] = "none";
        inputDivDireitos.style["border-color"] = "#767676";
    }
}

inputDivDireitos.addEventListener("click",mostrarDireitos);

qlqrDireitos.onclick = function(){
    inputDireitos.setAttribute("value","");
    inputPartDireitos.textContent = "não filtrados por licença";
}
uso1.onclick = function(){
    inputDireitos.setAttribute("value","f");
    inputPartDireitos.textContent = "sem restrições de uso ou compartilhamento";
}
uso2.onclick = function(){
    inputDireitos.setAttribute("value","fc");
    inputPartDireitos.textContent = "sem restrições de uso ou compartilhamento, mesmo comercialmente";
}
uso3.onclick = function(){
    inputDireitos.setAttribute("value","fm");
    inputPartDireitos.textContent = "Sem restrições de uso, compartilhamento ou modificação";
}
uso4.onclick = function(){
    inputDireitos.setAttribute("value","fmc");
    inputPartDireitos.textContent = "sem restrições de uso, compartilhamento ou modificação, mesmo comercialmente";
}
