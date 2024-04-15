var inputPartRegiao = document.getElementById("regiaoSub");
var menuDropRegiao = document.getElementById("regiaoMenu");
var inputRegiao = document.getElementById("regiaoInput");
var inputDivRegiao = document.getElementById("regiaoDiv");
const optionsRegiao = document.getElementsByClassName("optionsRegiao");

const qlqrRegiao = optionsRegiao[0];
const br = optionsRegiao[1];
const eua = optionsRegiao[2];
const cana = optionsRegiao[3];
const england = optionsRegiao[4];
const japan = optionsRegiao[5];
const alemanha = optionsRegiao[6];
const russia = optionsRegiao[7];
const china = optionsRegiao[8];

function mostrarRegiao(){
    if(menuDropRegiao.style["display"] == "none"){
        menuDropRegiao.style["display"] = "block";
        inputDivRegiao.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropRegiao.style["display"] = "none";
        inputDivRegiao.style["border-color"] = "#767676";
    }
}

inputDivRegiao.addEventListener("click",mostrarRegiao);

qlqrRegiao.onclick = function(){
    inputRegiao.setAttribute("value","all");
    inputPartRegiao.textContent = "qualquer país";
}
br.onclick = function(){
    inputRegiao.setAttribute("value","countryBR");
    inputPartRegiao.textContent = "Brasil";
}
eua.onclick = function(){
    inputRegiao.setAttribute("value","countryUS");
    inputPartRegiao.textContent = "Estados Unidos";
}
cana.onclick = function(){
    inputRegiao.setAttribute("value","countryCA");
    inputPartRegiao.textContent = "Canadá";
}
england.onclick = function(){
    inputRegiao.setAttribute("value","countryGB");
    inputPartRegiao.textContent = "Reino Unido";
}
japan.onclick = function(){
    inputRegiao.setAttribute("value","countryJP");
    inputPartRegiao.textContent = "Japão";
}
alemanha.onclick = function(){
    inputRegiao.setAttribute("value","countryDE");
    inputPartRegiao.textContent = "Alemanha";
}
russia.onclick = function(){
    inputRegiao.setAttribute("value","countryRU");
    inputPartRegiao.textContent = "Russia";
}
china.onclick = function(){
    inputRegiao.setAttribute("value","countryCN");
    inputPartRegiao.textContent = "China";
} 