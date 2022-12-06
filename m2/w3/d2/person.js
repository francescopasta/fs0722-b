class Person {
    nome;
    eta;
    constructor (nome, eta) {
        this.nome = nome;
        this.eta = eta;
    }
    confronto(b){
        if(this.eta > b.eta){
            return `${this.nome} e' piu' grande di ${b.nome}`
        } else if(this.eta == b.eta){
            return `${this.nome} e ${b.nome} hanno la stessa eta'`
        } else{
            return `${this.nome} e' piu' piccolo di ${b.nome}`
        }
    }
}

var giorgio = new Person ("Giorgio", 47)
var giovanni = new Person ("Giovanni", 23)
var michele = new Person ("Michele", 38)

console.log(giorgio.confronto(giovanni), ' | ' ,giorgio.confronto(michele))
console.log(giovanni.confronto(giorgio), ' | ' ,giovanni.confronto(michele))
console.log(michele.confronto(giovanni), ' | ' ,michele.confronto(giorgio))