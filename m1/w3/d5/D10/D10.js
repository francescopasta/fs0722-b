/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20  //creo una variabile sum e gli associo una semplice addizione di due numeri

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*21)  //creo una variabile random e ci assegno un Math.random per generare un numero randomico da 0,0000 a 0,9999, che moltiplico per 21 cosi da da aumentare il rango dei numeri da 0 a 20. Il tutto racchiuso fra parentesi in una funzione Math.floor, per arrotondare i numeri.
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {  //creo una costante me e apro parentesi graffe per creare un oggetto
  name: 'Francesco',  //assegno una chiave name ed inserisco il mio nome
  surname:  'Pastore',  //assegno una chiave surname ed inserisco il mio cognome
  age:  19  //assegno una chiave age ed inserisco la mia eta'
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete(me.age)  //lancio delete e fra parentesi seleziono l'oggetto e dopo il punto la chiave dell'oggetto da eliminare
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML', 'CSS', 'JavaScript']  //richiamo l'oggetto me e dopo il punto do il nome alla nuova chiave assegnandola con l'uguale ad un array, nel quale aggiungo tre valori stringa.
console.log(me.skills)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Angular(soon I hope)')  //richiamo la classe creata sopra 'skills' e con la funzione push() dico al codice di aggiungere la striga fra parentesi alla fine dell'array 'skills'.
console.log(me.skills)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()  //tramite la funzione pop() rimuovo l'ultimo elemento dell'array skills presente nell'oggetto me
console.log(me.skills)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(a = 0){  //creo una funzione dice() con un attributo a, settato di default a 0, il che ci servira' per un esercizio successivo
 return Math.ceil(Math.random(a)*6)  //tramite return e il metodo Math ritorno un numero randomico da 1 a 6. In questo caso uso Math.ceil per arrotondare il numero per eccesso. Cosi' da creare una range da 1 a 6, invece che da 0 a 5, come sarebbe stato con Math.floor
}
console.log(dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a,b){  //creo una funzione whoIsBigger() e gli assegno due parametri(a,b)
  if(a > b){  //creo un if statement dicendo che se a e' maggiore di b allora la funzione deve ritornare a
    return a
  } else if(b > a){  //creo un else if per dire che se invece b e' maggiore di a, allora ritorna b
    return b 
  } else {  // creo infine un else conclusivo per dire che in caso a & b fossero uguali, allora la funzione deve tornare 'equal'
    return 'equal'
  }
}

console.log(whoIsBigger(Math.ceil(Math.random()*20), Math.ceil(Math.random()*20)))  //infine per evitare di assegnare ad a & b dei numeri arbitrariamente, gli assegno dei numeri randomici da 1 a 20. 

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str){  //setto come parametro della funzione "str"
  return str.split(" ", 3)   //uso la funzione split() per dire a javascript di dividere la striga che sra' presente al posto del parametro in 3 parti, in questo caso dato che la frase che aggiungero' sara' composta da 3 parole
}

console.log(splitMe("I love coding")) //ritornando la funzione e lanciandola con "I love coding" al posto del parametro verra' fuori un array con 3 elementi, che corrispondono ciascuno ad una parola della stringa inserita

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool){  //setto due parametri alla funzione, il primo sra' una stringa e il secondo sra' un booleano
  if(bool){  //inizializzo un if statement con condizione (parametro booleano inserito in precedenza), il che significa che se il parametro sara' true allora il codice dentro l'id verra' lanciato
    return str.substring(1,str.length)  //dentro l'if uso substring con parametri 1 e lunghezza della stringa inserita, il che ritornera' la stringa solo da dopo la prima lettera
  } else{  //se il booleano sara' falso
    return str.substring(0,str.length -1)  //con i parametri 0 e lunghezza della stringa -1, ritornero' la stringa solo fino alla penultima lettera
  }
}

console.log(deleteOne('Ciao', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/*function onlyLetters(str){
  let array = str.split('')
  array.forEach(el => {
    if(typeof el == 'number'){
      delete(array[el])                          //NON RIUSCITO
    }
  });
  return array
}
console.log(onlyLetters('I have 4 dogs'))*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str){  //setto come parametro della funzione 'str' 
  if(str.includes('@'&&('.com'||'.it'))){  //inizializzo un if statement(condizione = chiedo alla stringa parametro se include i caratteri chiocciola e punto'com' o punto'it') se la condizione si verifichera' allora diro' alla funzione di ritornare true
    return true
  } else{
    return false  //in caso contrario l'email non sara' valida allora ritornero' falso
  }
}
console.log(isThisAnEmail('pastore@gmail.com'))


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){  
  let data = new Date()  //creo una variabile chiamata data e ci assegno la data corrente
  return data.getDay()  //ritorno il giorno della settimana in numero prendendo il valore day tramite getDay() 
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n){   //setto come parametro 'n'
  let values =[]   //creo una variabile 'values' e la assegno ad un array vuoto
  for (let i = 0; i <= n; i++) {  //creo un for loop per ciclare la funzione dice() creata in precedenza. Inseriro' n come valore massimo del ciclo for.
    values.push(dice(i))  //a questo punto ci servira' il parametro a inserito nela funzione dice(), che veniva inserito all'interno delle parentesi di Math.random(). Inserendo 'i' come parametro di dice(), i entrera' come parametro di random() e ciclera' la funzione fino a che i non sara' < di n in questo caso.
  }  //tutto questo lo pusho nel nuovo array values.

  const ritorna = {  //creo un oggetto con nome 'ritorna'
    sum: 0,  //gli assegno una chiave sum inizialmente uguale a 0
    values: values  //gli assegno una seconda chiave values e gli assegno l'array creato all'inizio in cui ho pushato la funzione dice() ciclato, cosi' da mostrare ogni numero randomico generato richiesto
  }

  values.forEach((e)=>{  //con un forEach di values seleziono tutti gli elementi di values
   ritorna.sum += e  //richiamo la chiave sum dell'oggetto ritorna e gli aggiungo con += ogni elemento di values, cosi' da sommare tutti i valori randomici ottenuti
  })

  return ritorna //in fine ritorno l'oggetto completo
}
console.log(rollTheDices(4))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(old){  //imposto un parametro alla funzione chiamato old
  const date = new Date()  //creo una const date con la data odierna, tramite new Date()
  let dayOggi = date.getDate()  //creo una variabile dayOggi e ci inserisco il giorno del mese dalla const creata in precedenza tramite getDate()
  return dayOggi - old  //ritorno dayOggi - il parametro inserito nella funzione
}
console.log(howManyDays(10))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(dBDay,mBDay){  //setto due parametri uno per il giorno del mese ed uno per il mese
  let date = new Date()  //setto una variabile in cui inserisco la data di oggi tramite new Date()
  let dataOggi = date.getDate()  //in una nuova variabile inserisco la il giorno del mese tramite getDate()
  let meseOggi = date.getMonth()  //in una nuova variabile inserisco il mese
  if (dataOggi == dBDay && meseOggi == mBDay) {  //creo un if statement che verifischera' se la data e il mese di oggi sono uguali ai due parametri settati dal richiamo della funzione
    return true  //se entrambi si verificano allora la funzione ritornera' true
  } else{
    return false  //se anche uno solo dei due non si verifica, la funzione ritornera' false
  }  
}
console.log(isTodayMyBirthday(30,12))

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// NON RIUSCITO

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(m){  //setto come parametro (m)
  let show = []  //creo una variabile 'show' con dentro un array vuoto
  for(let el of m){  //creo un for loop che seleziona ogni elemento del parametro m inserito
    show.push(el.Year)  //pusho dentro all'array la chiave Year di ogni elemento di m
  }
  show.sort((a,b)=>b-a)  //uso sort per ordinare i numeri dell'array in decrescente
  return show[0] //selezionando il primo elemento di show, seleziono dunque il piu' grande e lo ritornos
}
console.log(newestMovie(movies)) 

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(m){ //inserisco un parametro m
  return m.length  //ritorno la lunghezza dell'array m per dire la quantita' di film
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(m){  //setto come parametro (m)
  let show = []  //creo una variabile 'show' con dentro un array vuoto
  for(let el of m){  //creo un for loop che seleziona ogni elemento del parametro m inserito
    show.push(el.Year)  //pusho dentro all'array la chiave Year di ogni elemento di m
  }
  return show  //ritorno l'array show per mostrare tutti gli anni dei film
}
console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(m){
  let array = []   //creo una variabile con un array vuoto
  m.forEach((e)=>{  //creo un ciclo for each dell'array m che ho settato come parametro
    if(e.Year.substring(0,2).includes('19')){   //inizialiazzo un if statement dove chiedo di verificare se la sotto stringa delle prime due lettere della chiave anno di ogni elemento dell'arrray m include la stringa 19 
    array.push(e.Title)  //se la condizione si verifica allora pusho i titoli dei film in questione nell'array vuoto
  }
 })
 return array  //ritorno l'array pieno
}
console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(m){  //setto come parametro (m)
  let show = []  //creo una variabile 'show' con dentro un array vuoto
  for(let el of m){  //creo un for loop che seleziona ogni elemento del parametro m inserito
    let years = JSON.parse(el.Year)  //creo una variabile years nella quale inserisco tutte le chiavi anno degli elementi di m, i quali trasformo in numeri usando JSON.parse
    show.push(years)  //a questo punto pusho il contenuto della variabile nell'array show
  }
  let sum = 0  //creo una variabile sum e la imposto a 0
  show.forEach((e)=>{  
    sum += e   //con forEach dico che ogni elemento di show si deve aggiungere progressivamente a sum, cosi' da dare la somma di tutti gli anni
  })
  return sum  //ritorno la somma finale
}
console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str){
  let array = [] //creo una variabile a cui assegno un array vuoto
  movies.forEach((e)=>{  //creo un ciclo for each dell'array movies fornita in alto
    if(e.Title.includes(str)){   //inizialiazzo un if statement dove chiedo di verificare se la chiave Title di ogni elemento dell'arrray include la stringa str, settata come parametro
    array.push(e)  //se la condizione si verifica allora pusho gli oggetti film corrispondenti nell'array vuoto
  }
 })
 return array  //ritorno l'array riempito
}
console.log(searchByTitle('The Lord of the Rings'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str){
  let obj = {  //creo una variabile a cui assegno un oggetto con dentro due array vuote
    match: [],
    unmatch: []
  } 
  movies.forEach((e)=>{  //creo un ciclo for each dell'array movies fornita in alto
    if(e.Title.includes(str)){   //inizialiazzo un if statement dove chiedo di verificare se la chiave Title di ogni elemento dell'arrray include la stringa str, settata come parametro
    obj.match.push(e)  //se la condizione si verifica allora pusho gli oggetti film corrispondenti nell'array vuoto "match" dell'oggetto settato all'inizio della funzione
  } else{
    obj.unmatch.push(e)  //se la condizione non si verifica pusho gli oggetti (restanti) nell'array vuoto "unmatch", sempre dell'oggetto di inizio funzione
  }
 })
 return obj  //alla fine ritorno l'oggetto
}

console.log(searchAndDivide('Avengers'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n){  //inserisco un parametro n
  delete(movies[n])  //dico alla funzione di eliminare l'elemento dell'array che si agganzia al numero definito da n
  return movies  //ritorno n
}

console.log(removeIndex(0))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainer(){
  document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTd(){
  document.querySelectorAll('td')
} 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function tdText(){
  let td = document.querySelectorAll('td')
  td.forEach((e)=>{   
    console.log(e.textContent)
  })
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addBackground(){
  let link = document.querySelectorAll('a')
  link.forEach((e)=>{
    e.style.backgroundColor = 'red'
  })
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLi(){
  let elementoLista = document.createElement('li')
  document.getElementById('myList').append(elementoLista)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function removeListElement(){
  let allElements = document.querySelectorAll('#myList > li')
  document.getElementById('mylist').remove(allElements)
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addCSS(){
  let tags = document.querySelectorAll('tr')
  tags.forEach((e)=>{
    e.classList.add('test')
  })
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
