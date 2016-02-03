// Normal (non-initial or final outcome) scene
module scenes {
    export class NormalScene extends objects.Scene {
        private _ID: number;
        private _type: string;
        private _text: string;
        private _imageName: string;
        private _bgImage: createjs.Bitmap;
        public buttons: objects.Button[];

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(data: objects.SceneData) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;

            // add background image
            this._bgImage = new createjs.Bitmap("../../Assets/images/" + this._imageName);

            // Load alternatives into buttons
            this.buttons = new Array();
            var btnXpos: number = 10;
            var btnYpos: number = 530;
            for(var i:number = 0; i < data.Alternatives.length; i++){
              this.buttons[i] = new objects.Button(btnXpos, btnYpos, data.Alternatives[i]);
              btnXpos = btnXpos + 290;
            }

            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Assemble scene
            // Background image
            this.addChild(this._bgImage);

            // buttons
            for(var i: number = 0; i < this.buttons.length; i++){
              this.addChild(this.buttons[i]);
              this.addChild(this.buttons[i].label);
            }

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEFT_CAVE Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        }

        // LEFT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        }
    }
}
