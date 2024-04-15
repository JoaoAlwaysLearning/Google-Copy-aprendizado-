var inputPartIdioma = document.getElementById("idiomasSub");
var menuDropIdioma = document.getElementById("idiomasMenu");
var inputIdioma = document.getElementById("idiomaInput");
var inputDivIdioma = document.getElementById("idiomasDiv");
const optionsIdioma = document.getElementsByClassName("optionsIdioma");

const qlqrIdioma = optionsIdioma[0];
const pt_br = optionsIdioma[1];
const eng = optionsIdioma[2];
const jp = optionsIdioma[3];
const al = optionsIdioma[4];
const rs = optionsIdioma[5];
const cn_s = optionsIdioma[6];
const cn_t = optionsIdioma[7];

function mostrarIdioma(){
    if(menuDropIdioma.style["display"] == "none"){
        menuDropIdioma.style["display"] = "block";
        inputDivIdioma.style["border-color"] = "#8ab4f8";
    }
    else{
        menuDropIdioma.style["display"] = "none";
        inputDivIdioma.style["border-color"] = "#767676";
    }
}

inputDivIdioma.addEventListener("click",mostrarIdioma);

qlqrIdioma.onclick = function(){
    inputIdioma.setAttribute("value","all");
    inputPartIdioma.textContent = "qualquer idioma";
}
pt_br.onclick = function(){
    inputIdioma.setAttribute("value","lang_pt");
    inputPartIdioma.textContent = "Português";
}
eng.onclick = function(){
    inputIdioma.setAttribute("value","lang_en");
    inputPartIdioma.textContent = "Inglês";
}
jp.onclick = function(){
    inputIdioma.setAttribute("value","lang_ja");
    inputPartIdioma.textContent = "Japonês";
}
al.onclick = function(){
    inputIdioma.setAttribute("value","lang_de");
    inputPartIdioma.textContent = "Alemão";
}
rs.onclick = function(){
    inputIdioma.setAttribute("value","lang_ru");
    inputPartIdioma.textContent = "Russo";
}
cn_s.onclick = function(){
    inputIdioma.setAttribute("value","lang_zh-CN");
    inputPartIdioma.textContent = "Chinês (simplificado)";
}
cn_t.onclick = function(){
    inputIdioma.setAttribute("value","lang_zh-TW");
    inputPartIdioma.textContent = "Chinês (tradicional)";
}
 