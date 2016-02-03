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
        //public _alternatives: objects.Button[];
        // CONSTRUCTOR ++++++++++++++++++++++
        function NormalScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        NormalScene.prototype.start = function () {
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        NormalScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        NormalScene.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        NormalScene.prototype._rightCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return NormalScene;
    })(objects.Scene);
    scenes.NormalScene = NormalScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=normalScene.js.map