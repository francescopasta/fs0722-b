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
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
        this.balanceInit = 0;
        this.value;
    }
    SonAccount.prototype.deposit = function (value) {
        this.balanceInit += value;
        this.value = value;
        return this.balanceInit;
    };
    SonAccount.prototype.withDraw = function (value) {
        this.balanceInit -= value;
        this.value = value;
        return this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        var _this = _super.call(this) || this;
        _this.interesse;
        return _this;
    }
    MotherAccount.prototype.addInterest = function () {
        var dieci = (this.balanceInit * 10) / 100;
        this.interesse = dieci;
        this.balanceInit += dieci;
        return this.balanceInit;
    };
    return MotherAccount;
}(SonAccount));
var Francesco = new SonAccount();
var Maria = new MotherAccount();
console.log(Francesco.deposit(100));
console.log(Francesco.value);
console.log(Maria.deposit(60));
console.log(Maria.withDraw(20));
console.log(Maria.addInterest());
