var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Scene class contains all scene information
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // The constructor builds a scene according to the JSON data supplied
        function Scene(data) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            this._bgImage = new createjs.Bitmap("Assets/images/" + this._imageName);
            this._selectionLimit = data.SelectionLimit || -1; // -1 means limitless, default
            // Load alternatives into buttons
            this._buttons = new Array();
            var btnXpos = 10;
            var btnYpos = 530;
            for (var i = 0; i < data.Alternatives.length; i++) {
                this._buttons[i] = new objects.Button(btnXpos, btnYpos, data.Alternatives[i]);
                btnXpos = btnXpos + 290;
            }
            _super.call(this);
        }
        // Start Method
        Scene.prototype.start = function () {
            // Assemble scene
            // Background image
            this.addChild(this._bgImage);
            // buttons
            for (var i = 0; i < this._buttons.length; i++) {
                if (sceneLibrary && this._buttons[i].choiceData.targetID) {
                    // If the button's destination scene is past the selection limit, it is disabled.
                    if (sceneLibrary[this._buttons[i].choiceData.targetID].isSelectable()) {
                        this._buttons[i].enableButton();
                    }
                    else {
                        this._buttons[i].disableButton();
                    }
                }
                this.addChild(this._buttons[i]);
                this.addChild(this._buttons[i].label);
            }
            // add this scene to the global stage container
            stage.addChild(this);
            // Count the scene as viewed
            if (this._selectionLimit > 0)
                this._selectionLimit--;
        };
        Scene.prototype.update = function () {
        };
        Scene.prototype.isSelectable = function () {
            if (this._selectionLimit == 0)
                return false;
            else
                return true;
        };
        return Scene;
    })(createjs.Container);
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map