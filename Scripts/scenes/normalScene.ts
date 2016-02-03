// Normal (non-initial or final outcome) scene
module scenes {
    export class NormalScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        public _ID: number;
        public _type: string;
        public _text: string;
        public _image: string;
        //public _alternatives: objects.Button[];

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
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
