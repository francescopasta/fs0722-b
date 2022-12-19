var gioc1 = Math.floor(Math.random() * 101);
var gioc2 = Math.floor(Math.random() * 101);
checkCloseness();
function checkCloseness() {
    var numeroGioco = Math.floor(Math.random() * 100 + 1);
    var uno = Math.abs(gioc1 - numeroGioco);
    var unoS = "Giocatore 1";
    var due = Math.abs(gioc2 - numeroGioco);
    var dueS = "Giocatore 2";
    console.log("".concat(unoS, ": ").concat(gioc1));
    console.log("".concat(dueS, ": ").concat(gioc2));
    console.log("Numero: ".concat(numeroGioco));
    console.log(uno);
    console.log(due);
    if (gioc1 == 1) {
        if (gioc2 != 1) {
            console.log(unoS + " ha vinto");
        }
        else {
            console.log("".concat(unoS, " e ").concat(dueS, " sono pari"));
        }
    }
    else if (gioc2 == 1) {
        if (gioc1 != 1) {
            console.log(dueS + " ha vinto");
        }
        else {
            console.log("".concat(unoS, " e ").concat(dueS, " sono pari"));
        }
    }
    else {
        if (uno > due) {
            console.log(dueS + " ha vinto");
        }
        else if (due > uno) {
            console.log(unoS + " ha vinto");
        }
        else {
            console.log("".concat(unoS, " e ").concat(dueS, " sono pari"));
        }
    }
}
