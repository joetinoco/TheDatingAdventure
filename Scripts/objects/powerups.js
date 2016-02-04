var objects;
(function (objects) {
    // Powerups are stored as key-value pairs, for simplicity.
    var powerUps = (function () {
        function powerUps() {
            this._powers = new Object();
        }
        // Set the value of a power-up (usually 1 or 0)
        powerUps.prototype.setPowerUp = function (name, value) {
            this._powers[name] = value;
        };
        // Retrieve the current value of a power-up
        powerUps.prototype.getPowerUp = function (name) {
            return this._powers[name];
        };
        return powerUps;
    })();
    objects.powerUps = powerUps;
})(objects || (objects = {}));
//# sourceMappingURL=powerups.js.map