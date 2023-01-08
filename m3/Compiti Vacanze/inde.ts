class Quadrato {
    a:number
    constructor(lato:number){
        this.a = lato
    }
    getArea(){
        return Math.pow(this.a,2)
    }
}

class Rettangolo {
    a:number 
    b:number
    constructor(base:number,altezza:number){
        this.a = base
        this.b = altezza
    }
    getArea(){
        return this.a * this.b 
    }
}

class Triangolo {
    a:number 
    b:number
    constructor(base:number,altezza:number){
        this.a = base
        this.b = altezza
    }
    getArea(){
        return (this.a * this.b)/2
    }
}

class Cerchio {
    a:number 
    constructor(raggio:number){
        this.a = raggio
    }
    getArea(){
        return Math.PI*Math.pow(this.a, 2)
    }
}

class Trapezio {
    a:number
    b:number
    h:number 
    constructor(base:number, base2:number, altezza:number){
        this.a = base
        this.b = base2
        this.h = altezza
    }
    getArea(){
        return (this.h/2)*(this.a+this.b)
    }
}


function getFigure(fig:string, a:number, b?:number, h?:number) {
    if(fig == 'quadrato' && a != undefined) {
        let Giorgio = new Quadrato(a)
        return Giorgio.getArea()
    } else if(fig == 'rettangolo' && a != undefined && b != undefined) {
        let Stefano = new Rettangolo(a,b)
        return Stefano.getArea()
    } else if(fig == 'triangolo' && a != undefined && b != undefined) {
        let Giacomo = new Triangolo(a,b)
        return Giacomo.getArea()
    } else if(fig == 'cerchio' && a != undefined) {
        let Damiano = new Cerchio(a)
        return Damiano.getArea()
    } else if(fig == 'trapezio' && a != undefined && b != undefined && h != undefined) {
        let Giovanni = new Trapezio(a,b,h)
        return Giovanni.getArea()
    } else{
        return 'something went wrong, please try again'
    }
}

console.log(getFigure('quadrato', 20))
console.log(getFigure('rettangolo', 20,10))
console.log(getFigure('triangolo', 15,8))
console.log(getFigure('cerchio', 5))
console.log(getFigure('trapezio', 20, 30, 15))
