module objects {
    // Labels are used to display button text captions
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number, maxWidth: number) {
            super(labelString, labelFont, labelColour);
            this.lineWidth = maxWidth;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
    }
}
