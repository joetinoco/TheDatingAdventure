module objects {
    export class Button extends createjs.Bitmap {
        width: number;
        height: number;
        public label: objects.Label;
        choiceData: objects.Alternative;
        //CONSTRUCTOR
        constructor(x:number, y: number, btnData: any) {
            super("../../Assets/images/AlternativeButton.png");
            this.x = x;
            this.y = y;
            this.alpha = 0.7
            this.choiceData = btnData;

            this.width = 280;
            this.height = 130;

            this.regX = 0;
            this.regY = 0;

            this.label = new Label(btnData.caption, "30px 'Caveat Brush'", "#FFFFFF",
              x + (this.width * 0.5), y + (this.height * 0.5),
              this.width - 10);

            // Add event listeners
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.clickButton, this);
        }

        // PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }

        clickButton(event: createjs.MouseEvent): void {
          // Update powerups according to the user choice
          if (this.choiceData.powerUps){
            this.choiceData.powerUps.forEach(function(pow: Object){
              playerPowers.setPowerUp(Object.keys(pow)[0], pow[Object.keys(pow)[0]]);
            });
          }

          // For straightforward transitions, just load the corresponding scene
          if (this.choiceData.targetID){
            currentScene = sceneLibrary[this.choiceData.targetID];
          } else {
            // For conditional transitions, evaluate each one to decide the outcome
            var nextSceneID: number = undefined;
            this.choiceData.targetConditionals.forEach(function(condition: any){
              if (playerPowers.getPowerUp(condition.powerUp) === condition.value){
                nextSceneID = condition.targetID;
              }
              currentScene = sceneLibrary[nextSceneID];
            });

          }
          // Start the next scene
          currentScene.start();
        }

    }
}
