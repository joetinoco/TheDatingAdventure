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
            _super.call(this);
        }
        NormalScene.prototype.start = function () {
            this._bgImage = new createjs.Bitmap("../../Assets/images/" + this._imageName);
            this.addChild(this._bgImage);
            stage.addChild(this);
        };
        NormalScene.prototype.update = function () {
        };
        NormalScene.prototype._leftCaveButtonClick = function (event) {
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        };
        NormalScene.prototype._rightCaveButtonClick = function (event) {
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return NormalScene;
    }(objects.Scene));
    scenes.NormalScene = NormalScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=normalScene.js.map