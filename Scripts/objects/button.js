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
            this.choiceData = btnData;
            this.width = 280;
            this.height = 130;
            this.regX = 0;
            this.regY = 0;
            this.label = new objects.Label(btnData.caption, "30px 'Caveat Brush'", "#FFFFFF", x + (this.width * 0.5), y + (this.height * 0.5), this.width - 10);
            if (this.choiceData.selectionLimit > 0 || this.choiceData.selectionLimit === undefined) {
                this.enableButton();
            }
            else {
                this.disableButton();
            }
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.clickButton, this);
        }
        Button.prototype.disableButton = function () {
            this.alpha = 0.3;
            this.label.alpha = 0.3;
            this.enabled = false;
            console.log('button disabled');
        };
        Button.prototype.enableButton = function () {
            this.alpha = 0.7;
            this.label.alpha = 0.7;
            this.enabled = true;
        };
        Button.prototype.overButton = function (event) {
            if (this.enabled) {
                event.currentTarget.alpha = 1.0;
            }
        };
        Button.prototype.outButton = function (event) {
            if (this.enabled) {
                event.currentTarget.alpha = 0.7;
            }
        };
        Button.prototype.clickButton = function (event) {
            if (this.enabled) {
                if (this.choiceData.powerUps) {
                    this.choiceData.powerUps.forEach(function (pow) {
                        playerPowers.setPowerUp(Object.keys(pow)[0], pow[Object.keys(pow)[0]]);
                    });
                }
                if (this.choiceData.selectionLimit !== undefined) {
                    if (this.choiceData.selectionLimit >= 1) {
                        this.choiceData.selectionLimit--;
                        if (this.choiceData.selectionLimit === 0)
                            this.disableButton();
                    }
                }
                if (this.choiceData.targetID) {
                    currentScene = sceneLibrary[this.choiceData.targetID];
                }
                else {
                    var nextSceneID = undefined;
                    this.choiceData.targetConditionals.forEach(function (condition) {
                        if (playerPowers.getPowerUp(condition.powerUp) === condition.value) {
                            nextSceneID = condition.targetID;
                        }
                        currentScene = sceneLibrary[nextSceneID];
                    });
                }
                currentScene.start();
            }
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map