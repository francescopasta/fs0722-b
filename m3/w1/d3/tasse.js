var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var worker = /** @class */ (function () {
    function worker(redditoAnnuo) {
        this.codredd = 0;
        this.redditoAnnuoLordo = redditoAnnuo;
        this.tasseInps = 0;
        this.tasseIrpef = 0;
    }
    worker.prototype.getUtileTasse = function () {
        if (this.redditoAnnuoLordo <= 15000) {
            this.codredd = 1001;
        }
        else if (this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000) {
            this.codredd = 1002;
        }
        else if (this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 55000) {
            this.codredd = 1003;
        }
        else if (this.redditoAnnuoLordo > 55000 && this.redditoAnnuoLordo <= 75000) {
            this.codredd = 1004;
        }
        else {
            this.codredd = 1005;
        }
        return this.codredd;
    };
    worker.prototype.getTasseInps = function () {
        this.getUtileTasse();
        if (this.codredd == 1001) {
            this.tasseInps = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.tasseInps = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.tasseInps = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.tasseInps = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.tasseInps = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
        return this.tasseInps;
    };
    worker.prototype.getTasseIrpef = function () {
        this.getUtileTasse();
        if (this.codredd == 1001) {
            this.tasseIrpef = (this.redditoAnnuoLordo * 6) / 100;
        }
        else if (this.codredd == 1002) {
            this.tasseIrpef = (this.redditoAnnuoLordo * 8) / 100;
        }
        else if (this.codredd == 1003) {
            this.tasseIrpef = (this.redditoAnnuoLordo * 12) / 100;
        }
        else if (this.codredd == 1004) {
            this.tasseIrpef = (this.redditoAnnuoLordo * 16) / 100;
        }
        else if (this.codredd == 1005) {
            this.tasseIrpef = (this.redditoAnnuoLordo * 20) / 100;
        }
        else {
            console.log("there's been an error");
        }
        return this.tasseIrpef;
    };
    worker.prototype.getRedditoAnnuo = function () {
        this.getUtileTasse();
        this.getTasseInps();
        this.getTasseIrpef();
        return this.redditoAnnuoLordo - this.tasseInps - this.tasseIrpef;
    };
    return worker;
}());
var Bagnino = /** @class */ (function (_super) {
    __extends(Bagnino, _super);
    function Bagnino() {
        return _super.call(this, 14300) || this;
    }
    return Bagnino;
}(worker));
var CalciatoreB = /** @class */ (function (_super) {
    __extends(CalciatoreB, _super);
    function CalciatoreB() {
        return _super.call(this, 150000) || this;
    }
    return CalciatoreB;
}(worker));
var AgenteImmobiliare = /** @class */ (function (_super) {
    __extends(AgenteImmobiliare, _super);
    function AgenteImmobiliare() {
        return _super.call(this, 32000) || this;
    }
    return AgenteImmobiliare;
}(worker));
var Impiegato = /** @class */ (function (_super) {
    __extends(Impiegato, _super);
    function Impiegato() {
        return _super.call(this, 18000) || this;
    }
    return Impiegato;
}(worker));
var giulio = new Bagnino;
var gianluca = new CalciatoreB;
var piero = new AgenteImmobiliare;
var nicola = new Impiegato;
console.log(giulio.codredd);
console.log(giulio.getTasseInps());
console.log(giulio.getTasseIrpef());
console.log("Giulio: " + giulio.getRedditoAnnuo());
console.log("Gianluca: " + gianluca.getRedditoAnnuo());
console.log(gianluca.getUtileTasse());
console.log(gianluca.getTasseInps());
console.log(gianluca.getTasseIrpef());
console.log("Piero: " + piero.getRedditoAnnuo());
console.log(piero.getUtileTasse());
console.log(piero.getTasseInps());
console.log(piero.getTasseIrpef());
console.log("Nicola: " + nicola.getRedditoAnnuo());
console.log(nicola.getUtileTasse());
console.log(nicola.getTasseInps());
console.log(nicola.getTasseIrpef());
