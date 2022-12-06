class Pers {
    constructor(){
        this.persone = [
            {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
            {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
            {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
            {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
            {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
            {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
            {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
            {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
        ]
    }
    primi(num){
        tBody.innerHTML = ''
        for (let i = 0; i < num; i++) {
            tBody.innerHTML += `<tr><th scope="row">${this.persone[i].id}</th><td>${this.persone[i].nome}</td><td>${this.persone[i].cognome}</td><td>${this.persone[i].classe}</td></tr>`
        } 
    }
    ultimi(num){
        tBody.innerHTML = ''
        for (let i = this.persone.length - num; i < this.persone.length; i++) {
            tBody.innerHTML += `<tr><th scope="row">${this.persone[i].id}</th><td>${this.persone[i].nome}</td><td>${this.persone[i].cognome}</td><td>${this.persone[i].classe}</td></tr>`
        } 
    }
    precedente(num, cur){
        tBody.innerHTML = ''
        for (let i = cur - num; i < cur; i++) {
            tBody.innerHTML += `<tr><th scope="row">${this.persone[i].id}</th><td>${this.persone[i].nome}</td><td>${this.persone[i].cognome}</td><td>${this.persone[i].classe}</td></tr>`
        } 
    }
    successivo(num, cur){
        tBody.innerHTML = ''
        for (let i = cur; i < cur + num; i++) {
            tBody.innerHTML += `<tr><th scope="row">${this.persone[i].id}</th><td>${this.persone[i].nome}</td><td>${this.persone[i].cognome}</td><td>${this.persone[i].classe}</td></tr>`
        } 
    }
}

let tBody = document.querySelector('#body')
let primo = document.querySelector('#prim')
let precedente = document.querySelector('#prec')
let successivo = document.querySelector('#succ')
let ultimo = document.querySelector('#ult')

var persone = new Pers
persone.primi(2) 

primo.addEventListener('click', () => {
    persone.primi(2)
})

ultimo.addEventListener('click', () => {
    persone.ultimi(2)
})

precedente.addEventListener('click', () => {
   if(document.querySelector('#body th').textContent == 1){
   } else if(document.querySelector('#body th').textContent == 3){
      persone.primi(2)
   } else if(document.querySelector('#body th').textContent == 5){
      persone.precedente(2,4)
   } else {
      persone.precedente(2,6)
   }
})

successivo.addEventListener('click', () => {
    if(document.querySelector('#body th').textContent == 1){
        persone.successivo(2, 2)
       } else if(document.querySelector('#body th').textContent == 3){
          persone.successivo(2, 4)
       } else if(document.querySelector('#body th').textContent == 5){
          persone.ultimi(2)
       }
})
