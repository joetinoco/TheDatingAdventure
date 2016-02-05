/// <reference path = "_reference.ts" />
/*

    THE DATING ADVENTURE
    ====================
    
    Will you get lucky tonight?
    
    Developed as a COMP397 (Web Game Programming) assignment.
    
    Created and programmed by Joseph Tinoco - Winter 2016
    
    Contains excerpts from https://github.com/CentennialCollege/COMP397-W2016-TheNewDragon
    
*/
//
// Global variables
//
var canvas;
var stage;
var stats;
var currentScene;
var playerPowers;
// The game data is loaded from a JSON and stored here
var stateMachineData;
// The gender selection menu
var mainMenu;
// Game Scenes will be created from this data and stored here
var sceneLibrary;
//
// LOADGAME: This is the very first method loaded.
// It loads game data from a JSON file and shows the gender selection menu
//
function loadGame() {
    // Load scene data from JSON
    var request = new XMLHttpRequest();
    request.onload = function () {
        stateMachineData = new Object();
        stateMachineData = JSON.parse(this.responseText);
        init();
    };
    request.open("get", "Assets/sceneData/scenedata.json", true);
    request.send();
}
//
// INIT: Set up the game environment
//
function init() {
    // Set up canvas and stage
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    // Creates the main menu
    mainMenu = new menus.genderMenu();
    // Enable mouse events
    stage.enableMouseOver(20);
    // Set framerate and the game loop
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // Invokes the main menu
    currentScene = mainMenu;
    currentScene.start();
}
//
// STARTNEWGAME: Initializes a new game
//
function startNewGame(dateGender) {
    sceneLibrary = new Array();
    for (var i = 0; i < stateMachineData[dateGender].length; i++) {
        sceneLibrary[stateMachineData[dateGender][i].ID] = new objects.Scene(stateMachineData[dateGender][i]);
    }
    // Initializes the player "power ups" bank
    playerPowers = new objects.powerUps();
    // Start first scene
    currentScene = sceneLibrary[1];
    currentScene.start();
}
// 
// GAMELOOP: runs every frame tick, updates the current scene
// 
function gameLoop(event) {
    stats.begin();
    // Update scene elements
    currentScene.update();
    // redraw/refresh scene elements
    stage.update();
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
//# sourceMappingURL=game.js.map