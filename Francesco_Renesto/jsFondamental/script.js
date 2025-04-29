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
function myFunction(val1, val2, array)//passa per valore le variabili vengono duplicate
{                              //solo primitivi, array riferimento 
    console.log(val1+val2);
    array.pop();
}
myFunction(10,20, array);
array.forEach(myFunction);
function priNum(...args)//rest operator
{
    console.log(args);
}
priNum(2,3,4);
priNum(3,4,5,6,7,8,9);

let addTwoNum=function(a,b)
{
    return a+b;
}
console.log(addTwoNum(5,2));
let addThreeNum=(a,b,c)=>a+b+c;//arrow function => 1 operazione
console.log(addThreeNum(5,2,1));
array.forEach(function(value, index,array2)
{
    array2[index]=value.toLowerCase();
});
console.log(array);

let array3= array.filter(nome=>nome.startsWith('g'));
console.log(array3);
let saluti=array.map(nome=> `Ciao ${nome}`);
console.log(saluti);
mynum=[2,4,6,8,10];
found= mynum.find(element=>element>5);
console.log(found);
num=mynum.reduce((accumulatore,numero)=>{
return accumulatore+numero;
},0);
console.log(num);
/*OGGETTO*/

//coppia key-valore
const persona={
    nome: 'Antonio',
    età: 25,
    studente: false,
    saluta: function(num){
        console.log(`Ciao sono ${this.nome}, e il mio num preferito è ${num}`);
    }
};
console.log(persona.nome);
persona.saluta(10);