let x="ciao";
console.log(x.concat(" oggi è una bella giornata").replace("ciao", "buongiorno").toUpperCase());
let mycolours= ["Blu", "Rosso", "Verde", "Nero", "Bianco"];
mycolours.forEach((element, index) =>
{
    console.log(element.toUpperCase().concat(" "+index));
}
)
let num=[1,4,26,11,9,90,56,17,33,44];
let num2=num.filter(num=>num>20);
console.log(num2);
let num3=[1,2,3,4];
console.log(num3.map(num=>num*num));
let num4=[2,7,3,12];
console.log(num4.reduce((a, num)=>a+num,0));
console.log(num4.reduce((a, num)=>a+num,-5));