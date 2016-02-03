// Normal (non-initial or final outcome) scene
module scenes {
    export class NormalScene extends objects.Scene {
        private _ID: number;
        private _type: string;
        private _text: string;
        private _imageName: string;
        //public _alternatives: objects.Button[];
        private _bgImage: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(data: objects.SceneData) {
            this._ID = data.ID;
            this._type = data.Type;
            this._text = data.Text;
            this._imageName = data.Image;
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add background image
            this._bgImage = new createjs.Bitmap("../../Assets/images/" + this._imageName);
            this.addChild(this._bgImage);

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
