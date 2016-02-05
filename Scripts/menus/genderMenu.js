var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var menus;
(function (menus) {
    // The gender menu allows the player to select the "gender" of the game data.
    var genderMenu = (function (_super) {
        __extends(genderMenu, _super);
        function genderMenu() {
            var menuData = {
                "ID": 0,
                "Type": "menu",
                "Text": "Which gender are you attracted to?",
                "Image": "genderMenu.PNG",
                "Alternatives": [
                    {
                        "caption": "I like men",
                        "loadStateSet": "male"
                    },
                    {
                        "caption": "I like women",
                        "loadStateSet": "female"
                    }
                ]
            };
            _super.call(this, menuData);
        }
        // Start Method: build the menu
        genderMenu.prototype.start = function () {
            _super.prototype.start.call(this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        genderMenu.prototype.update = function () {
        };
        return genderMenu;
    })(objects.Scene);
    menus.genderMenu = genderMenu;
})(menus || (menus = {}));
//# sourceMappingURL=genderMenu.js.map