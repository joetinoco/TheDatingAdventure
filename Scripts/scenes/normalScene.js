var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Normal (non-initial or final outcome) scene
var scenes;
(function (scenes) {
    var NormalScene = (function (_super) {
        __extends(NormalScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function NormalScene(data) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            // add background image
            this._bgImage = new createjs.Bitmap("../../Assets/images/" + this._imageName);
            // Load alternatives into buttons
            this.buttons = new Array();
            var btnXpos = 10;
            var btnYpos = 530;
            for (var i = 0; i < data.Alternatives.length; i++) {
                this.buttons[i] = new objects.Button(btnXpos, btnYpos, data.Alternatives[i]);
                btnXpos = btnXpos + 290;
            }
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        NormalScene.prototype.start = function () {
            // Assemble scene
            // Background image
            this.addChild(this._bgImage);
            // buttons
            for (var i = 0; i < this.buttons.length; i++) {
                this.addChild(this.buttons[i]);
                this.addChild(this.buttons[i].label);
            }
            // add this scene to the global stage container
            stage.addChild(this);
        };
        NormalScene.prototype.update = function () {
        };
        return NormalScene;
    })(objects.Scene);
    scenes.NormalScene = NormalScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=normalScene.js.map