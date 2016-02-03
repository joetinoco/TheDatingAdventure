var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, btnData) {
            _super.call(this, "../../Assets/images/AlternativeButton.png");
            this.x = x;
            this.y = y;
            this.alpha = 0.7;
            this.alternative = btnData;
            this.width = 280;
            this.height = 130;
            this.regX = 0;
            this.regY = 0;
            this.label = new objects.Label(btnData.caption, "20px Arial", "#FFFFFF", x + (this.width * 0.5), y + (this.height * 0.5), this.width - 10);
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.clickButton, this);
        }
        Button.prototype.overButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        Button.prototype.clickButton = function (event) {
            console.log("Next scene: " + this.alternative.targetID);
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map