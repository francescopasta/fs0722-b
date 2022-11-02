/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb1 = 12
let numb2 = 21

if(numb1 > numb2){
  console.log(numb1 + " e' piu' grande")
} else if(numb1 < numb2){
  console.log(numb2 + " e' piu' grande")
} else {
  console.log('I due numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 7

if(number != 5){
  console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 15

if(number1 % 5 == 0){
  console.log('divisibile per 5')
} else {
  console.log('non divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let inter1 = 10
let inter2 = 2

if (inter1 == 8 || inter2 == 8 || inter1 + inter2 == 8 || inter1 - inter2 == 8){
  console.log(true)
} else {
  console.log(false)
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cart = {
  prezzoSpedizione: 10
}
let totalShoppingCart = 60

if(totalShoppingCart <= 50){
  console.log(totalShoppingCart + " $ tot. + " + cart.prezzoSpedizione + "$ di spedizione")
} else {
  console.log(totalShoppingCart + " $ tot. spezizione Gratuita")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cartB = {
  prezzoSpedizione: 10,
  sconto: totalShoppingCart*0.20
} 

let totalShoppingCartB = totalShoppingCart - cartB.sconto

if(totalShoppingCartB <= 50){
  console.log(totalShoppingCartB + " $ tot. + " + cartB.prezzoSpedizione + "$ di spedizione")
} else {
  console.log(totalShoppingCartB + " $ tot. spezizione Gratuita")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let deg1 = 120
let deg2 = 340
let deg3 = 111

var algoritmo = [deg1, deg2, deg3]
console.log(algoritmo.sort())*/

let z1 = 6
let z2 = 14
let z3 = 10

if(z1>=z2){
  if(z3>=z1){
    console.log(z3,z1,z2)
  } else {
    if(z3>=z2){
      console.log(z1,z3,z2)
    } else{
      console.log(z1,z2,z3)
    } 
  }
} else{
  if(z3>=z2){
    console.log(z3,z2,z1)
  } else{
    if(z3>=z1){
      console.log(z2,z3,z1)
    } else{
      console.log(z2,z1,z3)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore= '5'

if(typeof valore === "number"){
  console.log(true)
} else {
  console.log(false)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let parOdis = 567

if(parOdis %2 == 0){
  console.log('pari')
} else{
  console.log('dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 5
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.citta = 'Toronto'

console.log(me.citta)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName 

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2]

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = []
array[0] = 1
array[1] = 2
array[2] = 3
array[3] = 4
array[4] = 5
array[5] = 6
array[6] = 7
array[7] = 8
array[8] = 9
array[9] = 10

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9] = 100
console.log(array)
