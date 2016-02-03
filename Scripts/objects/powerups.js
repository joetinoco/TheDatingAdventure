var objects;
(function (objects) {
    var powerUps = (function () {
        function powerUps() {
            this._powers = new Object();
        }
        powerUps.prototype.setPowerUp = function (name, value) {
            this._powers[name] = value;
        };
        powerUps.prototype.getPowerUp = function (name) {
            return this._powers[name];
        };
        return powerUps;
    }());
    objects.powerUps = powerUps;
})(objects || (objects = {}));
//# sourceMappingURL=powerups.js.map