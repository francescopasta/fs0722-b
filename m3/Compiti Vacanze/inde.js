var Quadrato = /** @class */ (function () {
    function Quadrato(lato) {
        this.a = lato;
    }
    Quadrato.prototype.getArea = function () {
        return Math.pow(this.a, 2);
    };
    return Quadrato;
}());
var Rettangolo = /** @class */ (function () {
    function Rettangolo(base, altezza) {
        this.a = base;
        this.b = altezza;
    }
    Rettangolo.prototype.getArea = function () {
        return this.a * this.b;
    };
    return Rettangolo;
}());
var Triangolo = /** @class */ (function () {
    function Triangolo(base, altezza) {
        this.a = base;
        this.b = altezza;
    }
    Triangolo.prototype.getArea = function () {
        return (this.a * this.b) / 2;
    };
    return Triangolo;
}());
var Cerchio = /** @class */ (function () {
    function Cerchio(raggio) {
        this.a = raggio;
    }
    Cerchio.prototype.getArea = function () {
        return Math.PI * Math.pow(this.a, 2);
    };
    return Cerchio;
}());
var Trapezio = /** @class */ (function () {
    function Trapezio(base, base2, altezza) {
        this.a = base;
        this.b = base2;
        this.h = altezza;
    }
    Trapezio.prototype.getArea = function () {
        return (this.h / 2) * (this.a + this.b);
    };
    return Trapezio;
}());
function getFigure(fig, a, b, h) {
    if (fig == 'quadrato' && a != undefined) {
        var Giorgio = new Quadrato(a);
        return Giorgio.getArea();
    }
    else if (fig == 'rettangolo' && a != undefined && b != undefined) {
        var Stefano = new Rettangolo(a, b);
        return Stefano.getArea();
    }
    else if (fig == 'triangolo' && a != undefined && b != undefined) {
        var Giacomo = new Triangolo(a, b);
        return Giacomo.getArea();
    }
    else if (fig == 'cerchio' && a != undefined) {
        var Damiano = new Cerchio(a);
        return Damiano.getArea();
    }
    else if (fig == 'trapezio' && a != undefined && b != undefined && h != undefined) {
        var Giovanni = new Trapezio(a, b, h);
        return Giovanni.getArea();
    }
    else {
        return 'something went wrong, please try again';
    }
}
console.log(getFigure('quadrato', 20));
console.log(getFigure('rettangolo', 20, 10));
console.log(getFigure('triangolo', 15, 8));
console.log(getFigure('cerchio', 5));
console.log(getFigure('trapezio', 20, 30, 15));
