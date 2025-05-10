/** DOM  document*/
/** BOM  window*/

//window.alert("ciao 4f");
//const numero = Number(window.prompt());
//const numero = parseInt(window.prompt());
//window.alert(numero);
//console.log(numero+10);

console.log(window.screen.width);
console.log(window.screen.height);

/*
0-300 smartphone
300-600 tablet
600-window.screen.width pc
*/

if(window.innerWidth<300){
    console.log("sono uno smartphone.");
    //document.body.style.backgroundColor
}

if(window.innerWidth>=300 && window.innerWidth<=600){
    console.log("sono un tablet.");
}

if(window.innerWidth>600){
    console.log("sono un pc.");
}