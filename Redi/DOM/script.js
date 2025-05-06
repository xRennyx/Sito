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


const nodeList = document.querySelectorAll("p");
const htmlCollection = document.getElementsByTagName("p");
console.log(nodeList);
console.log(htmlCollection);

//Creare un elemento html
const newPara = document.createElement("p"); //Crea un p
newPara.textContent = "sono il paragrafo creato da CSS";
newPara.style.backgroundColor = "#eb3474";
const body = document.getElementsByTagName("body");
body[0].appendChild(newPara); //Quello che aggiugno va in coda
//console.log(body);

const newPara2 = document.createElement("p");
newPara2.textContent = "sono il secondo paragrafo creato da CSS";
newPara2.style.backgroundColor = "#16aecc";
body[0].insertBefore(newPara2, body[0].children[2]); //Mette l'elemento dove decidiamo noi

//Eliminare un elemento
body[0].removeChild(body[0].children[1]);
//console.log(body);