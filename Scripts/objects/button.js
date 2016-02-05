var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Button class: used by the player to operate the game.
    // All user choices are shown using an instance of this class, attached to a scene.
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, btnData) {
            _super.call(this, "Assets/images/AlternativeButton.png");
            this.x = x;
            this.y = y;
            this.alpha = 0.7;
            this.choiceData = btnData;
            this.width = 280;
            this.height = 130;
            this.regX = 0;
            this.regY = 0;
            this.label = new objects.Label(btnData.caption, "30px 'Caveat Brush'", "#FFFFFF", x + (this.width * 0.5), y + (this.height * 0.5), this.width - 30);
            if (this.choiceData.selectionLimit > 0 || this.choiceData.selectionLimit === undefined) {
                this.enableButton();
            }
            else {
                this.disableButton();
            }
            // Add event listeners
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.clickButton, this);
        }
        // PRIVATE METHODS
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
        // Event Handler for mouse over
        Button.prototype.overButton = function (event) {
            if (this.enabled) {
                event.currentTarget.alpha = 1.0;
            }
        };
        // Event Handler for mouse out
        Button.prototype.outButton = function (event) {
            if (this.enabled) {
                event.currentTarget.alpha = 0.7;
            }
        };
        Button.prototype.clickButton = function (event) {
            if (this.enabled) {
                // Update powerups according to the user choice
                if (this.choiceData.powerUps) {
                    this.choiceData.powerUps.forEach(function (pow) {
                        playerPowers.setPowerUp(Object.keys(pow)[0], pow[Object.keys(pow)[0]]);
                    });
                }
                // Update click count for limited-click actions
                if (this.choiceData.selectionLimit !== undefined) {
                    if (this.choiceData.selectionLimit >= 1) {
                        this.choiceData.selectionLimit--;
                        if (this.choiceData.selectionLimit === 0)
                            this.disableButton();
                    }
                }
                // A button with the 'loadStates' attribute reloads the entire game
                // with the desired state set
                if (this.choiceData.loadStateSet) {
                    startNewGame(this.choiceData.loadStateSet);
                }
                // For straightforward transitions, just load the corresponding scene
                if (this.choiceData.targetID) {
                    if (this.choiceData.targetID === 0) {
                        // ID 0 means 'send the user to the main menu'
                        mainMenu.start();
                    }
                    else {
                        currentScene = sceneLibrary[this.choiceData.targetID];
                        currentScene.start();
                    }
                }
                else {
                    // For conditional transitions, evaluate each one to decide the outcome
                    var nextSceneID = undefined;
                    this.choiceData.targetConditionals.forEach(function (condition) {
                        if (playerPowers.getPowerUp(condition.powerUp) === condition.value) {
                            nextSceneID = condition.targetID;
                        }
                        currentScene = sceneLibrary[nextSceneID];
                    });
                    currentScene.start();
                }
            }
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map