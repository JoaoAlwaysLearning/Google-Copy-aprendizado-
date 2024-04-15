var inputPartArquivo = document.getElementById("arquivoSub");
var menuDropArquivo = document.getElementById("arquivoMenu");
var inputArquivo = document.getElementById("arquivoInput");
var inputDivArquivo = document.getElementById("arquivoDiv");
const optionsArquivo = document.getElementsByClassName("optionsArquivo");

const qlqrArquivo = optionsArquivo[0];
const pdf = optionsArquivo[1];
const ps = optionsArquivo[2];
const dwf = optionsArquivo[3];
const kml = optionsArquivo[4];
const kmz = optionsArquivo[5];
const xls = optionsArquivo[6];
const ppt = optionsArquivo[7];
const doc = optionsArquivo[8];
const rtf = optionsArquivo[9];
const swf = optionsArquivo[10];

function mostrarArquivo(){
    if(menuDropArquivo.style["display"] == "none"){
        menuDropArquivo.style["display"] = "block";
        inputDivArquivo.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropArquivo.style["display"] = "none";
        inputDivArquivo.style["border-color"] = "#767676";
    }
}

inputDivArquivo.addEventListener("click",mostrarArquivo);

qlqrArquivo.onclick = function(){
    inputArquivo.setAttribute("value","");
    inputPartArquivo.textContent = "qualquer formato";
}
pdf.onclick = function(){
    inputArquivo.setAttribute("value","pdf");
    inputPartArquivo.textContent = "Adobe Acrobat PDF (.pdf)";
}
ps.onclick = function(){
    inputArquivo.setAttribute("value","body");
    inputPartArquivo.textContent = "Adobe Postscript (.ps)";
}
dwf.onclick = function(){
    inputArquivo.setAttribute("value","url");
    inputPartArquivo.textContent = "Autodesk DWF (.dwf)";
}
kml.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Google Earth KML (.kml)";
}
kmz.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Google Earth KMZ (.kmz)";
}
xls.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Microsoft Excel (.xls)";
}
ppt.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Microsoft Powerpoint (.ppt)";
}
doc.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Microsoft Word (.doc)";
}
rtf.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Formato Rich Text (.rtf)";
}
swf.onclick = function(){
    inputArquivo.setAttribute("value","links");
    inputPartArquivo.textContent = "Shockwave Flash (.swf)";
}
