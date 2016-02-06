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
        private _buttons: objects.Button[];
        // The number of times a user can visit a scene
        private _selectionLimit: number;

        // The constructor builds a scene according to the JSON data supplied
        constructor(data: objects.SceneData) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            this._bgImage = new createjs.Bitmap("Assets/images/" + this._imageName);
            this._selectionLimit = data.SelectionLimit || -1; // -1 means limitless, default
            // Load alternatives into buttons
            this._buttons = new Array();
            var btnXpos: number = 10;
            var btnYpos: number = 530;
            for(var i:number = 0; i < data.Alternatives.length; i++){
              this._buttons[i] = new objects.Button(btnXpos, btnYpos, data.Alternatives[i]);
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
            for(var i: number = 0; i < this._buttons.length; i++){
                if(sceneLibrary && this._buttons[i].choiceData.targetID){
                    // If the button's destination scene is past the selection limit, it is disabled.
                    if (sceneLibrary[this._buttons[i].choiceData.targetID].isSelectable()){
                        this._buttons[i].enableButton();
                    } else {
                        this._buttons[i].disableButton();
                    }
                }
              this.addChild(this._buttons[i]);
              this.addChild(this._buttons[i].label);
            }

            // add this scene to the global stage container
            stage.addChild(this);
            // Count the scene as viewed
            if (this._selectionLimit > 0) this._selectionLimit--; 
        }

        public update(): void {

        }
        
        public isSelectable(): boolean {
            if (this._selectionLimit == 0) return false;
            else return true;
        }

    }
}