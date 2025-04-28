let js= 'js è un bel linguaggio'; //"stringa" `Stringa` (alt+96)
console.log(js);
//dinamicamento tipizzato (age non è un tipo è il contenuto che si porta dentro il tipo)
let age= 27;
console.log(age);
age= `non lo so`
console.log(age);
console.log(typeof 27);
console.log(typeof 'Informatica 4F');
console.log(typeof age);
//number, string, boolean (Tipi di dati)
//+bonus null, undefined, symbol, bigint
console.log(5+'4'); //Concatena 2 stringhe (54) 5 diventa stringa
let classe= '4F'
let indirizzo= 'informatica';
let presentazione= `siamo in ${classe} indirizzo ${indirizzo}`;
console.log(presentazione);
const inputYear='1991';
//if else
for(let i=0; i<5; i++)
{
    console.log('js');
}
console.log(4>5 ? 'ok' : 'KO');
//operatore di ugualianza
if(12==='12') //== dice comunque uguale se numero e stringa === no
{
    console.log('sono uguali');
}
else
{
    console.log('sono diversi');
}
const array=['Giovanni', 'Saso', 'Dante'];
console.log(array);
array.push("Alfredo");
console.log(array);
array.pop();
console.log(array);
function myFunction(val1, val2)//passa per valore le variabili vengono duplicate
{                              //solo primitivi, array riferimento 
    console.log(val1+val2);
}
myFunction(10,20);
array.forEach(myFunction);