/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* Stringhe: Il dato Stringa contiene degli elementi testuali racchiusi in mezzo a virgolette: '' o "" o ``(in casi particolari)
   Numeri: Il dato Numerico contiene appunto un numero che puo' essere intero o decimale(si indica con il punto, non con la virgola), e non ha bisogno di essere racchiuso fra le virgolette. Tuttavia se fosse racchiuso fra virgolette il suo valore numerico rimarebbe uguale, anche se la sua tipologia andrebbe considerata Stringa. 
   Booleani: Il dato Booleano puo' contenere due valori : 'true' o 'false', quindi vero o falso. Serve per attivare dei blocchi condizionali.
   Null: Si palesa quando si cerca un dato che non e' presente perche' non e' stato inizializzato. Segnala che non e' presente alcun contenitore.
   Undefined: Significa che il dato richiesto e' stato inizializzato ma non contiene nessun valore. Una specie di contenitore vuoto. */ 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Francesco"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Pastore"
console.log(name)

const cognome = 'Pastore'

//cognome = 'Francesco'
console.log(cognome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 ='john'
let name2 = 'John'

console.log(name1 == name2)

function verifica(){
if (name1 == name2){
  console.log('uguale')
} else{
  console.log('diversa')
}
}

verifica()
 
name2 = name2.toLowerCase()

verifica()
