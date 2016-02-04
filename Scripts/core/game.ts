/// <reference path = "_reference.ts" />

//
// Global variables
//
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var currentScene: objects.Scene;
var playerPowers: objects.powerUps;
// Game Scenes will be loaded from a JSON file and stored here
var sceneLibrary: scenes.NormalScene[];

//
// LOADGAME: This is the very first method loaded.
// It loads game data from a JSON file and starts the game
//
function loadGame(): void {
  // Load scene data from a JSON and create the scene library
  var request = new XMLHttpRequest();
  request.onload = function() {
    sceneLibrary = new Array();
    var sceneJsonData = JSON.parse(this.responseText);
    for (var i: number = 0; i < sceneJsonData.length; i++){
      sceneLibrary[sceneJsonData[i].ID] = new scenes.NormalScene(sceneJsonData[i]);
    }
    console.log(sceneLibrary);

    init();
  };
  request.open("get", "../Assets/sceneData/scenedata.json", true);
  request.send();
}

//
// INIT: Start up the game
//
function init(): void {
    // Set up canvas and stage
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    // Enable mouse events
    stage.enableMouseOver(20);

    // Set framerate and the game loop
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", gameLoop, this);

    // sets up our stats counting workflow
    setupStats();

    // Initializes the player "power ups" bank
    playerPowers = new objects.powerUps();

    // Start first scene
    currentScene = sceneLibrary[1];
    currentScene.start();
}

// 
// GAMELOOP: runs every frame tick, updates the current scene
// 
function gameLoop(event: createjs.Event): void {
    stats.begin();

    // Update scene elements
    currentScene.update();

    // redraw/refresh scene elements
    stage.update();

    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}