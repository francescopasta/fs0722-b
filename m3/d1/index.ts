var gioc1:number = Math.floor(Math.random()*101)
var gioc2:number = Math.floor(Math.random()*101)
checkCloseness()

function checkCloseness() {
    var numeroGioco:number = Math.floor(Math.random()*100 + 1)
    var uno:number = Math.abs(gioc1 - numeroGioco)
    var unoS:string = "Giocatore 1"
    var due:number = Math.abs(gioc2 - numeroGioco)
    var dueS:string = "Giocatore 2"

    console.log(`${unoS}: ${gioc1}`)
    console.log(`${dueS}: ${gioc2}`)
    console.log(`Numero: ${numeroGioco}`)
    console.log(uno)
    console.log(due)

    if(gioc1 == 1) {
        if(gioc2 != 1) {
            console.log(unoS + " ha vinto")
        } else {
            console.log(`${unoS} e ${dueS} sono pari`)
        }
    } else if(gioc2 == 1) {
        if(gioc1 != 1) {
            console.log(dueS + " ha vinto")
        } else {
            console.log(`${unoS} e ${dueS} sono pari`)
        }
    } else {
        if(uno > due) {
        console.log(dueS + " ha vinto")
        } else if(due > uno) {
            console.log(unoS + " ha vinto")
        } else {
            console.log(`${unoS} e ${dueS} sono pari`)
        }
    }
}