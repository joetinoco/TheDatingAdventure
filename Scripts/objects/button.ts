module objects {
    // Button class: used by the player to operate the game.
    // All user choices are shown using an instance of this class, attached to a scene.
    export class Button extends createjs.Bitmap {
        width: number;
        height: number;
        // Label is the button caption, or text
        public label: objects.Label; 
        // "Metadata" for the button, including what scene does it take the user after a click.
        choiceData: objects.Alternative; 
        // Button status. Disabled buttons have a different visual representation 
        enabled: boolean; 

        constructor(x:number, y: number, btnData: any) {
            super("Assets/images/AlternativeButton.png");
            this.x = x;
            this.y = y;
            this.alpha = 0.7;
            this.choiceData = btnData;
            this.width = 280;
            this.height = 130;
            this.regX = 0;
            this.regY = 0;

            this.label = new Label(btnData.caption, "30px 'Caveat Brush'", "#FFFFFF",
              x + (this.width * 0.5), y + (this.height * 0.5),
              this.width - 30);
            if (this.choiceData.selectionLimit > 0 || this.choiceData.selectionLimit === undefined){
              this.enableButton();
            } else {
              this.disableButton();
            }

            // Add event listeners
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.clickButton, this);
        }

        // PRIVATE METHODS
        disableButton(): void {
          this.alpha = 0.3;
          this.label.alpha = 0.3;
          this.enabled = false;
          console.log('button disabled');
        }

        enableButton(): void {
          this.alpha = 0.7;
          this.label.alpha = 0.7;
          this.enabled = true;
        }

        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void {
          if (this.enabled){
            event.currentTarget.alpha = 1.0;
          }
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
          if (this.enabled){
            event.currentTarget.alpha = 0.7;
          }
        }

        clickButton(event: createjs.MouseEvent): void {
          if(this.enabled){
            // Update powerups according to the user choice
            if (this.choiceData.powerUps){
              this.choiceData.powerUps.forEach(function(pow: Object){
                playerPowers.setPowerUp(Object.keys(pow)[0], pow[Object.keys(pow)[0]]);
              });
            }
            // Update click count for limited-click actions
            if (this.choiceData.selectionLimit !== undefined){
              if (this.choiceData.selectionLimit >= 1){
                this.choiceData.selectionLimit--;
                if (this.choiceData.selectionLimit === 0) this.disableButton();
              }
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
}
