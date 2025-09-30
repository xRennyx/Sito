var bottone= document.getElementById("bottone");
const bottone1= document.getElementById("add");
var divs=document.getElementById("div");
function myfunction(divs,i)
{
    divs.array.forEach(element => {
        element.style.backgroundColor='green';
    });
}
element.addEventListener(('click',myfunction));
function myfunction2()
{
    document.body.append(document.createElement('p'));
}
element.addEventListener(('click',myfunction2));