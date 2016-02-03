var canvas;
var stage;
var stats;
var currentScene;
var scene;
var intro;
var leftCave;
var rightCave;
var sceneLibrary;
var request = new XMLHttpRequest();
request.onload = function () {
    sceneLibrary = new Array();
    var sceneJsonData = JSON.parse(this.responseText);
    for (var i = 0; i < sceneJsonData.length; i++) {
        sceneLibrary[sceneJsonData[i].ID] = new scenes.NormalScene(sceneJsonData[i]);
    }
    console.log(sceneLibrary);
    currentScene = sceneLibrary[1];
    currentScene.start();
};
request.open("get", "../Assets/sceneData/scenedata.json", true);
request.send();
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", gameLoop, this);
    setupStats();
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
    switch (scene) {
        case config.Scene.INTRO:
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.LEFT_CAVE:
            stage.removeAllChildren();
            leftCave = new scenes.LeftCave();
            currentScene = leftCave;
            console.log("Starting LEFT_CAVE Scene");
            break;
        case config.Scene.RIGHT_CAVE:
            stage.removeAllChildren();
            rightCave = new scenes.RightCave();
            currentScene = rightCave;
            console.log("Starting RIGHT_CAVE Scene");
            break;
    }
}
//# sourceMappingURL=game.js.map