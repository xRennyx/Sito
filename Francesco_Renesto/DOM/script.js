//console.log(document);
const primoP = document.getElementById("primoP");
primoP.textContent = "ciao";
primoP.style.backgroundColor = "red";
const pCollection = document.getElementsByTagName("p");
//console.log(pCollection);
pCollection[1].style.backgroundColor = "green";
for(p of pCollection)
{
    p.style.backgroundColor = "blue";
}
const pList = document.querySelectorAll("p");
//console.log(pList);
pList.forEach(p => p.style.backgroundColor = "yellow");
pList.forEach(p => p.style.padding = "10px");
pList.forEach(p => p.style.margin = "50px");


const nodeList=document.querySelectorAll("p");
const htmlCollection= document.getElementsByTagName("p");
console.log(nodeList);
console.log("--------------------")
console.log(htmlCollection);

//creare elemento
const newPara= document.createElement("p");
newPara.textContent= "sono il paragrafo creato da css";
newPara.style.backgroundColor= "#c7f2cd"
const body= document.getElementsByTagName("body");
body[0].appendChild(newPara);
console.log(body);

const newPara2 = document.createElement("p");
newPara2.textContent= "sono il secondo paragrafo creato da css";
newPara2.style.backgroundColor= "#cc6262"
body[0].insertBefore(newPara2, body[0].children[3]);

//Eliminare un elemento
body[0].removeChild(body[0].children[1]);
console.log("--------------------")
console.log(body);