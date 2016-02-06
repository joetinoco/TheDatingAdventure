module menus {
  // The gender menu allows the player to select the "gender" of the game data.
  export class genderMenu extends objects.Scene {
      private _maleButton: objects.Button;
      private _femaleButton: objects.Button;
      constructor() {
            var menuData: objects.SceneData = {
                "ID": 0,
                "Type": "menu",
                "Text": "Which gender are you attracted to?",
                "Image": "genderMenu.PNG",
                "Alternatives" : [
                {
                    "targetID": 1,
                    "caption": "I like men",
                    "loadStateSet": "male"
                },
                {
                    "targetID": 1,
                    "caption": "I like women",
                    "loadStateSet": "female"
                }
                ],
                SelectionLimit: -1
            };
            super(menuData);
        }

        // Start Method: build the menu
        public start(): void {
            super.start();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        public update(): void {

        }
    }
  }