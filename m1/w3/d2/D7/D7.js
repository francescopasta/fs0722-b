/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function conc(str1,str2){
  let fun = str1.slice(0,2) + str2.slice(str2.length -3) //non ci va la virgola, perche' sarebbe la lunghezza -3 caratteri
  let fun2 = fun.toUpperCase()
  return fun2
} 
console.log(conc('ciao', 'luca'))

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

  function arr(){
    let array = []
      for (let i = 0; i < 101; i++) {
         if(i % 2 === 1){
           array.push(i)
         } 
      }
    return array
  }
  console.log(arr())

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

  function cinque(){
    let array = []
    for (let i = 0; i < 101; i++) {
      if(i%5 === 0){
        array.push(i)
      }
    }
    return array
  }
  console.log(cinque())

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

 function random(){
  let array = []
  for(let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random(i)*101))
  }
  return array
 }
 console.log(random())

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
 function create(){
 let array = []
  for(let i = 0; i < 100; i++){
    array[i] = i
  }
  return array 
}

  function pari(arr){
    return arr.filter((e) => { //.filter da 
      return e % 2 == 0; 
    } )
  }

  console.log(pari(create()))

  /*function findEvenNumbers(arr){
  let evenArr = []
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] % 2 === 0){
      evenArr.push(arr[i])
    }
  }
  return evenArr
}

let ajax = [34,65,87,35,24,32,100,4]
console.log(findEvenNumbers(ajax))*/

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

  let is = [2,4,6,3,5,7]

   function sum(numeri){
    return numeri.reduce((c,d) => {return c + d})
   }

   console.log(sum(is))

   function es6(array){
    var som = 0
    for (let i = 0; i < array.length; i++) {
      som +=array[i]
    }
    return som
   }
   console.log(es6(is))

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

let ajax = [34,65,87,35,24,32,100,4]

function incrementa(array){
  for (let i = 0; i < array.length; i++) {
    array[i]++
  }
  return array
}

console.log(incrementa(ajax))

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let animali = ["Meloni", "Berlu", "Salvini"]

function otto(array){
  let s = []  //s viene collegato ad animali, anche se indirettamente, perche' in questo specifico caso, non abbiamo sotituito gli elementi di animali, con la lunghezza di ogni elemento, ma abbiamo utilizzato gli elementi di animali per creare una nuova array dove inserire la lunghezza di ciascun dato e poi loggarla nella console.
  for (let u of array) {
    s.push(u.length)//non si puo' fare array(parametro).push, perche' in questo caso il parametro non e' stato inizializzato come array dentro la funzione, quindi i comandi non lo riconoscono
  }
  return s 
}

console.log(otto(animali))

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

let aldebaran = [34,65,87,35,24,32,100,4]

function eliminaPari(arr){

  let counter = 0
  
  while (counter !== arr.length) {
    if(arr[counter] % 2 === 0) {
      arr.splice(counter, 1)
    } else {
      counter++
    }
    
  }
  return arr
}
console.log(eliminaPari(aldebaran))

//console.log(eliminaPari(aldebaran))

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

  function arrayRandom(){//creo la funzione che non richiede parametri
    let array = [] //crea un array vuoto chiamato array
    let numeroRandom = undefined//creo la variabile numeroRandom, nella quale verra' memorizzato un numero random
    let i = 0 //creo l'indice i utile per il ciclo while
    while(i < 10){ //creo un ciclo while, che si fermera' quando l'indice i superera' la 10 ronda. (in questo caso creera' un ciclo di 10 elementi)
      numeroRandom = Math.floor(Math.random() * 11) //assegno alla variabile un numero random da 1 a 10
      if(!array.includes(numeroRandom)){ //imposto un if che si muovera' in questo modo: se in tutto l'array non e' presente il valore random appena assegnato a numeroRandom, esegui il codice seguente
        array.push(numeroRandom) //se quindi la condizione si verifichera' allora inseriremo nell'Array l'elemento, che non era cnora presente
        i++ //aumento il conto del while, cosi' che arrivato a 10 si fermi. Solo se pero' la condizione del If sara' verificata.
      } 
    }
    return array //ritorno l'array
  }
  let arrays = arrayRandom()

  console.log(arrays)

  /*const createDuplicate = function(){//dichiarata funzione
    let array = []//dichiarata array vuota
    for (let i = 0; i < 10; i++) {//ciclo for per 10 volte
      let added = false//valore booleano per rimanere nel ciclo while per rimanere nell'if verificato
      while(!added){//condizione while, che agisce finche added e' false, ovvero fin quando non viene inserito un elemento
        let numberToAdd = Math.ceil(Math.random()*10) //viene inserita una variabile random tra uno e 100
        if(!array.includes(numberToAdd)){ //va a controllare se nell'array non e' presente il numero appena messo
          array.push(numberToAdd) //dato che il numero non e' presente lo abbiamo aggiunto all'Array
          added = true //quando un elemento raggiunge questo punto esce dal ciclo e viene aggiunto all'Array e va a ripetere l'istruzione 
        }
      }
    }
    return array
  }
  console.log(createDuplicate())*/


/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let array = [4,6,2,4,5,7,8]

function invert(ae){
  return ae.reverse()
}
console.log(invert(array))

/*function arrReverse(numeri){
  let arrTras = []
  for (let i = 0; i < numeri.length; i++) {
     array[i] = numeri[numeri.length - i -1]
  }
  numeri = arrTras

  return numeri
}*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoli(obj){
  let s = []
  for(let i of obj){
    s += i.Title + ' ' 
    i++
  } 
  return s
}

console.log(titoli(movies))

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function somma() {
  let sum = 0
  for (let i = 0; i< movies.length; i++) {
     movies[i].Year.slice((e) => {
       sum += e
      })
    }
  return sum 
}
console.log(somma())

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
