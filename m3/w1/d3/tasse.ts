abstract class worker {
    codredd:number 
    redditoAnnuoLordo:number
    tasseInps:number
    tasseIrpef:number
    constructor(redditoAnnuo:number) {
        this.codredd = 0
        this.redditoAnnuoLordo = redditoAnnuo
        this.tasseInps = 0
        this.tasseIrpef = 0
    }
    getUtileTasse():number {
        if(this.redditoAnnuoLordo <= 15000){
            this.codredd = 1001
        }else if(this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000){
            this.codredd = 1002
        }else if(this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 55000){
            this.codredd = 1003
        }else if(this.redditoAnnuoLordo > 55000 && this.redditoAnnuoLordo <= 75000){
            this.codredd = 1004
        }else {
            this.codredd = 1005
        }
        return this.codredd
    }
    getTasseInps() {
        this.getUtileTasse()
        if(this.codredd == 1001){
            this.tasseInps = (this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.tasseInps = (this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.tasseInps = (this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.tasseInps = (this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.tasseInps = (this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
        return this.tasseInps
    }
    getTasseIrpef() {
        this.getUtileTasse()
        if(this.codredd == 1001){
            this.tasseIrpef = (this.redditoAnnuoLordo * 6) / 100
        }else if(this.codredd == 1002){
            this.tasseIrpef = (this.redditoAnnuoLordo * 8) / 100
        }else if(this.codredd == 1003){
            this.tasseIrpef = (this.redditoAnnuoLordo * 12) / 100
        }else if(this.codredd == 1004){
            this.tasseIrpef = (this.redditoAnnuoLordo * 16) / 100
        }else if(this.codredd == 1005){
            this.tasseIrpef = (this.redditoAnnuoLordo * 20) / 100
        }else {
            console.log("there's been an error")
        }
        return this.tasseIrpef
    }
    getRedditoAnnuo() {
        this.getUtileTasse()
        this.getTasseInps()
        this.getTasseIrpef()
        return this.redditoAnnuoLordo - this.tasseInps - this.tasseIrpef
    }
}

class Bagnino extends worker {
    constructor() {
        super(14300)
    }
}
class CalciatoreB extends worker {
    constructor() {
        super(150000)
    }
}
class AgenteImmobiliare extends worker {
    constructor() {
        super(32000)
    }
}
class Impiegato extends worker {
    constructor() {
        super(18000)
    }
}

var giulio = new Bagnino
var gianluca = new CalciatoreB
var piero = new AgenteImmobiliare
var nicola = new Impiegato

console.log(giulio.codredd)
console.log(giulio.getTasseInps())
console.log(giulio.getTasseIrpef())
console.log("Giulio: "+giulio.getRedditoAnnuo())

console.log("Gianluca: "+gianluca.getRedditoAnnuo())
console.log(gianluca.getUtileTasse())
console.log(gianluca.getTasseInps())
console.log(gianluca.getTasseIrpef())

console.log("Piero: "+piero.getRedditoAnnuo())
console.log(piero.getUtileTasse())
console.log(piero.getTasseInps())
console.log(piero.getTasseIrpef())

console.log("Nicola: "+nicola.getRedditoAnnuo())
console.log(nicola.getUtileTasse())
console.log(nicola.getTasseInps())
console.log(nicola.getTasseIrpef())
