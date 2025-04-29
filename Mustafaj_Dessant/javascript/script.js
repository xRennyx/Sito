let js = 'js è un bel linguaggio'; // "stringa" Stringa (alt+96)
console.log(js);
//dinamicamento tipizzato (age non è un tipo è il contenuto che si porta dentro il tipo)
let age = 27;
console.log(age);
age = 'non lo so';
console.log(age);
console.log(typeof 27);
console.log(typeof 'Informatica 4F');
console.log(typeof age);
//number, string, boolean (Tipi di dati)
//+bonus null, undefined, symbol, bigint
console.log(5 + '4'); //Concatena 2 stringhe (54) 5 diventa stringa

let classe = '4F';
let indirizzo = 'informatica';
let presentazione = `siamo in ${classe} indirizzo ${indirizzo}`;
console.log(presentazione);

const inputYear = '1991';
//if else
for (let i = 0; i < 5; i++) {
    console.log('js');
}

console.log(4 > 5 ? 'ok' : 'KO');
//operatore di ugualianza
if (12 === '12') //== dice comunque uguale se numero e stringa === no
{
    console.log('sono uguali');
}
else
{
    console.log('sono diversi');
}

const array = ['Giovanni', 'Saso', 'Dante'];
console.log(array);
array.push("Alfredo");
console.log(array);
array.pop();
console.log(array);

function myFunction(val1, val2) { //passa per valore le variabili vengono duplicate
    console.log(val1 + val2);
}
myFunction(10, 20);
array.forEach(myFunction);

function myFuncArray(myArr) {
    myArr.push('Giuseppe');
}

myFuncArray(array);
console.log(array);

function printNum(...args) { //Rest operator: numero variabile di argomenti in una funzione e ne crea un array
    console.log(args);
}

printNum(2, 3, 4);
printNum(5, 6, 7, 8);

let addTwoNum = function (a, b) {
    return a + b;
}

console.log(addTwoNum(5, 2));

let addThreeNum = (a, b, c) => a + b + c; //Arrow function => una sola operazione

console.log(addThreeNum(5, 2, 7));

array.forEach(function (value, index, array) {
    array[index] = value.toLowerCase();
});
console.log(array);

array.forEach((value, index, array) => array[index] = value.toUpperCase());
console.log(array);

let secondArray = amici.filter(nome=>nome.startsWith("g"));
console.log(secondArray);

amici.map(nome=> `Ciao ${nome}`);
console.log(saluti);

mynum= [2,4,6,8,10];
found = mynum.find(element=>element>5);
console.log(found);

num = mynum.reduce((accumulatore,numero)=>{
    return accumulatore+numero;
},0);
console.log(num);

const persona={
    nome: 'Antonio',
    eta:25,
    studente:false,
    saluta: function(num){
        console.log(`Ciao sono ${this.nome} e il mio num preferito è ${num}`);
    }
};
console.log(persona.nome);
persona.saluta(10);