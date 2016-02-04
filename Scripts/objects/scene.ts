module objects {
  // Scene class contains all scene information
  export class Scene extends createjs.Container {
      // Scene ID
        private _ID: number;
        // Scene type (not used in this version)
        private _type: string;
        // Text to display in the scene (not used in this version)
        private _text: string;
        // Background image file name
        private _imageName: string;
        // Background image object
        private _bgImage: createjs.Bitmap;
        // User action buttons
        private buttons: objects.Button[];

        // The constructor builds a scene according to the JSON data supplied
        constructor(data: objects.SceneData) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            this._bgImage = new createjs.Bitmap("Assets/images/" + this._imageName);

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

        public update(): void {

        }

    }
}