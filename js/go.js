var Nangua = (function () {
    function Nangua() {
    }
    var count = 0;
    Nangua.prototype.printNangua = function () {
        count++;
        var p = document.createElement("p");
        p.innerHTML = "南瓜..." + count;
        document.getElementById("spanId").appendChild(p);
    };
    Nangua.prototype.start = function () {
        window.setInterval(this.printNangua, 500);
    };
    Nangua.prototype.stop = function () {
        window.clearInterval(this.printNangua);
    }
    return Nangua;
}());

var AlertAll = (function () {
    function AlertAll() {
        this._isAlert = false;
    }
    Object.defineProperty(AlertAll.prototype, "isAlert", {
        get: function () {
            return this._isAlert;
        },
        enumerable: true,
        configurable: true
    });
    AlertAll.prototype.pudaoAllTime = function () {
        this._isAlert = true;
        while (true) {
            window.alert("扑倒you");
        }
    };
    return AlertAll;
}());

var nangua = new Nangua();
var pudao = new AlertAll();
nangua.start();

function stopClick() {
    nangua.stop();
    if (!pudao.isAlert){
        pudao.pudaoAllTime();
    }
}