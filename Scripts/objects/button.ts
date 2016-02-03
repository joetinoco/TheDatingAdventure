module objects {
    export class Button extends createjs.Bitmap {
        width: number;
        height: number;
        public label: objects.Label;
        alternative: objects.Alternative;
        //CONSTRUCTOR
        constructor(x:number, y: number, btnData: Alternative) {
            super("../../Assets/images/AlternativeButton.png");
            this.x = x;
            this.y = y;
            this.alpha = 0.7
            this.alternative = btnData;

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
            console.log("Next scene: " + this.alternative.targetID);
            currentScene = sceneLibrary[this.alternative.targetID];
            currentScene.start();
        }

    }
}
