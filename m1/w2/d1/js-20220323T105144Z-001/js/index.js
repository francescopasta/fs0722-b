
alert('Uso il pop up per mandare dei messaggi');
window.alert('Sto studiando JS');

var favouriteAnimal = "Capra"
var favourite2Animal = "Uccello"
var anni = prompt("Quanti anni hai?")

let p = document.getElementById("paragraph") 
let btn = document.getElementById("btn")

if(anni < 18){
function save(){
    p.innerText = favouriteAnimal + ' is my favourite animal!'
}
} else if (anni >= 18){
    function save(){
        p.innerText = favourite2Animal + ' is my favourite animal!'
    }
}
