var canvas;
var stage;
var stats;
var currentScene;
var scene;
var sceneLibrary;
function loadGame() {
    var request = new XMLHttpRequest();
    request.onload = function () {
        sceneLibrary = new Array();
        var sceneJsonData = JSON.parse(this.responseText);
        for (var i = 0; i < sceneJsonData.length; i++) {
            sceneLibrary[sceneJsonData[i].ID] = new scenes.NormalScene(sceneJsonData[i]);
        }
        console.log(sceneLibrary);
        init();
    };
    request.open("get", "../Assets/sceneData/scenedata.json", true);
    request.send();
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", gameLoop, this);
    setupStats();
    currentScene = sceneLibrary[1];
    currentScene.start();
}
function gameLoop(event) {
    stats.begin();
    currentScene.update();
    stage.update();
    stats.end();
}
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
function changeScene() {
}
//# sourceMappingURL=game.js.map