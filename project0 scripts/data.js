var inputPartData = document.getElementById("dataSub");
var menuDropData = document.getElementById("dataMenu");
var inputData = document.getElementById("dataInput");
var inputDivData = document.getElementById("dataDiv");
const optionsData = document.getElementsByClassName("optionsData");

const qlqrData = optionsData[0];
const hora = optionsData[1];
const semana = optionsData[2];
const mes = optionsData[3];
const ano = optionsData[4];

function mostrarData(){
    if(menuDropData.style["display"] == "none"){
        menuDropData.style["display"] = "block";
        inputDivData.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropData.style["display"] = "none";
        inputDivData.style["border-color"] = "#767676";
    }
}

inputDivData.addEventListener("click",mostrarData);

qlqrData.onclick = function(){
    inputData.setAttribute("value","all");
    inputPartData.textContent = "em qualquer data";
}
hora.onclick = function(){
    inputData.setAttribute("value","d");
    inputPartData.textContent = "nas últimas 24 horas";
}
semana.onclick = function(){
    inputData.setAttribute("value","w");
    inputPartData.textContent = "na última semana";
}
mes.onclick = function(){
    inputData.setAttribute("value","m");
    inputPartData.textContent = "no último mês";
}
ano.onclick = function(){
    inputData.setAttribute("value","y");
    inputPartData.textContent = "no último ano";
}