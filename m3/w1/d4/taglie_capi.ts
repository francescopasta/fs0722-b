class Capo {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    bg:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, bg:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
        this.id = id
        this.codprod = codprod 
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.bg = bg
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }
    getSaldoCapo():number{
        return (this.prezzoivaesclusa * this.saldo) / 100
    }
    getAcquistoCapo():number {
        let prezzoFinale = this.prezzoivainclusa - this.getSaldoCapo()
        return JSON.parse(parseFloat(JSON.stringify(prezzoFinale)).toPrecision(4))
    }
}

