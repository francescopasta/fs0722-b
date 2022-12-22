var Capo = /** @class */ (function () {
    function Capo(id, codprod, collezione, capo, modello, quantita, colore, bg, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.bg = bg;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Capo.prototype.getSaldoCapo = function () {
        return (this.prezzoivaesclusa * this.saldo) / 100;
    };
    Capo.prototype.getAcquistoCapo = function () {
        var prezzoFinale = this.prezzoivainclusa - this.getSaldoCapo();
        return JSON.parse(parseFloat(JSON.stringify(prezzoFinale)).toPrecision(4));
    };
    return Capo;
}());

fetch("./starter/Abbigliamento.json")
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
        let winterN = document.querySelector('#negozioWinter')
        let winterM = document.querySelector('#magazzinoWinter')
        let summerN = document.querySelector('#negozioSummer')
        let summerM = document.querySelector('#magazzinoSummer')
        let springN = document.querySelector('#negozioSpring')
        let springM = document.querySelector('#magazzinoSpring')
        console.log(winterN)
        
    for (var i = 0; i < myJson.length; i++) {
        var capi = new Capo(myJson[i].id, myJson[i].codprod, myJson[i].collezione, myJson[i].capo, myJson[i].modello, myJson[i].quantita, myJson[i].colore, myJson[i].bg, myJson[i].prezzoivaesclusa, myJson[i].prezzoivainclusa, myJson[i].disponibile, myJson[i].saldo);
        if(capi.collezione == "inverno"){
            if(capi.disponibile == "negozio"){
                
                console.log(capi.getAcquistoCapo())
                winterN.innerHTML = `
                    <h3>Negozio</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            } else if(capi.disponibile == "magazzino"){
                winterM.innerHTML = `
                    <h3>Magazzino</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            }
            
        } else if(capi.collezione == "estate"){
            if(capi.disponibile == "negozio"){
                summerN.innerHTML = `
                    <h3>Negozio</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            } else if(capi.disponibile == "magazzino"){
                summerM.innerHTML = `
                    <h3>Magazzino</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            }
            
        } else if(capi.collezione == "primavera"){
            if(capi.disponibile == "negozio"){
                springN.innerHTML = `
                    <h3 class="text-white">Negozio</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            } else if(capi.disponibile == "magazzino"){
                springM.innerHTML = `
                    <h3 class="text-white">Magazzino</h3>
                    <div class="card" style="width: 18rem;">
                        <div class="d-flex justify-content-around p-2 bg-${capi.bg}">
                            <h3 class="card-title mb-0 text-white fw-4 text-center">${capi.capo}</h3>
                            <h6 class="card-subtitle text-light text-white align-self-center">${capi.colore}</h6>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-lg fw-3 mb-2">Scontato del ${capi.saldo}%</button>
                            <div class="d-flex justify-content-between">
                                <p class="card-text text-muted">${capi.codprod}</p>
                                <p class="card-text text-dark">Modello: ${capi.modello}</p>
                            </div>
                            <a href="#" class="card-link text-primary fs-4">${capi.getAcquistoCapo()}$</a>
                            <a href="#" class="card-link text-primary">${capi.quantita} rimasti</a>
                        </div>
                    </div>
                `
            }
        }
    }
});