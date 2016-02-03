var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var NormalScene = (function (_super) {
        __extends(NormalScene, _super);
        function NormalScene(data) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            this._bgImage = new createjs.Bitmap("../../Assets/images/" + this._imageName);
            this.buttons = new Array();
            var btnXpos = 10;
            var btnYpos = 530;
            for (var i = 0; i < data.Alternatives.length; i++) {
                this.buttons[i] = new objects.Button(btnXpos, btnYpos, data.Alternatives[i]);
                btnXpos = btnXpos + 290;
            }
            _super.call(this);
        }
        NormalScene.prototype.start = function () {
            this.addChild(this._bgImage);
            for (var i = 0; i < this.buttons.length; i++) {
                this.addChild(this.buttons[i]);
                this.addChild(this.buttons[i].label);
            }
            stage.addChild(this);
        };
        NormalScene.prototype.update = function () {
        };
        return NormalScene;
    }(objects.Scene));
    scenes.NormalScene = NormalScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=normalScene.js.map