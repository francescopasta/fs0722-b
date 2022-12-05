function NamesData(name, surname, date) {
    this.name = name;
    this.surname = surname;
    this.date = date;
    this.nomCogn = function () {
        return this.name + ' ' + this.surname
    }
    this.findUltimateDate = function () {
        this.bornYear = this.date.substring(0,4)
        this.bornMonth = this.date.substring(5,7)
        this.bornDate = this.date.substring(8,10)
        this.curDate = new Date()
        this.curYear = this.curDate.getFullYear()
        this.curMonth = this.curDate.getMonth()
        this.curDay = this.curDate.getDate()
        this.finalDate = this.curYear - this.bornYear
    };
    this.calcDate = function() {
        this.findUltimateDate()
        if(this.bornMonth > this.curMonth){
            this.finalDate -- 
         } else if (this.curMonth == this.bornMonth && this.bornDate > this.curDay){
            this.finalDate --
         }
    };
} 

var nome = document.querySelector('#nome')
var cognome = document.querySelector('#cognome')
var data = document.querySelector('#data')
let bottone = document.querySelector('button')
let tBody = document.querySelector('#t_body')
let p = document.querySelector('p')

bottone.addEventListener('click', () => {
    if(nome.value && data.value ){
        let newName = new NamesData(nome.value, cognome.value, data.value)
        newName.calcDate()
        tBody.innerHTML += '<tr> <td class="w-25">' + newName.nomCogn() + '</td> <td class="w-25">' + newName.finalDate + '</td> </tr>'

        nome.value = ''
        cognome.value = ''
        data.value = ''
        p.innerHTML = ''
    } else {
        p.innerHTML = "Valore Mancante";
    }
})
