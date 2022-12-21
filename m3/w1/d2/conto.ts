class SonAccount {
    balanceInit:number = 0
    value:number 

    constructor () {
        this.balanceInit = 0
        this.value 
    }
    deposit(value:number):number {
        this.balanceInit += value
        this.value = value
        return this.balanceInit
    }
    withDraw(value:number) {
        this.balanceInit -= value
        this.value = value
        return this.balanceInit
    }
}

class MotherAccount extends SonAccount {
    interesse:number
    constructor() {
        super();
        this.interesse
    }
    addInterest() {
        var dieci:number = (this.balanceInit * 10) / 100
        this.interesse = dieci
        this.balanceInit += dieci
        return this.balanceInit
    }
}

var Francesco = new SonAccount()
var Maria = new MotherAccount()

// let depositoS = (<HTMLInputElement>document.querySelector('#addS')).value
// let prelievoS = (<HTMLInputElement>document.querySelector('#takeS')).value
// let depositoM = (<HTMLInputElement>document.querySelector('#addM')).value
// let prelievoM = (<HTMLInputElement>document.querySelector('#takeM')).value

// let conto_textS = document.querySelector('#contoS')
// let conto_textM = document.querySelector('#contoM')

// let btnSadd = document.querySelector('#button-add1')
// let btnSmove = document.querySelector('#button-move1')
// let btnMadd = document.querySelector('#button-add2')
// let btnMmove = document.querySelector('#button-move2')



// function addNumS(conto:any) {
//     conto.textContent = Francesco.deposit(depositoS)
// }



console.log(Francesco.deposit(100))
console.log(Francesco.value)
console.log(Maria.deposit(60))
console.log(Maria.withDraw(20))
console.log(Maria.addInterest())