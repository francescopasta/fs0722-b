/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2){
    return l1 * l2
}
console.log(area(12,2))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (a,b){
    if(a === b){
        return (a + b)* 3
    } else {
        return a + b
    }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a){
    if(a > 19){
        return Math.abs(a - 19)*3
    } else{
        return Math.abs(a - 19)
    }   
}
console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if(n >= 20 && n <= 100 || n === 400){
        return true
    } 
}
console.log(boundary(43))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epi = 'EPICODE'

function epify(str){
    /*if(str.startsWith('EPICODE')){
        return str
    } else {
        return 'EPICODE ' + str 
    }*/
    let textStr = str.substring(0,7) //mi prende i primi 6 (in questo caso) caratteri, prende il primo e l'ultimo carattere e li esclude
    if (textStr === epi){
        return str 
    } else {
        return epi + ' ' + str 
    }
}
console.log(epify('EPICODE Ciao'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(a = 0){
    if((a%3 == 0 || a%7 == 0) && a > 0){
        return a
    } else {
        return "il parametro inserito non e' un multiplo di 3 o 7"
    }
}
console.log(check3and7(-3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    let arrow = str.split("").reverse().join("")
    return arrow
}
console.log(reverseString('Ciao'))
console.log(reverseString('EPICODE'))

/*function reverseString(str){
    let strReversed = [] //serve a contenere i caratteri di STR in ordine inverso
    let rev = '' //conterra' la stringa invertita
    for(let i = 0; i < str.length ; i++){
        strReversed[i] = str[str.length - 1 - i]; // -i lo reversa
        rev += strReversed[i] 
    }
} console.log(reverseString('Luca'))/*

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str){
    let first = str.substring(0,1)
    let second = str.substring(1, str.length)
    return first.toUpperCase() + second
}
console.log(upperFirst('logico'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){
    let arr = str.split("")

}
cutString('Lorem')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
   for (let i = 0; i < n; i++) {
    var element = Math.floor(Math.random(i)*10);
   } return element
}
console.log(giveMeRandom(5))