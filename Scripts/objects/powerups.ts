module objects {
// Powerups are stored as key-value pairs, for simplicity.
  export class powerUps {
    private _powers: Object;
    constructor(){
      this._powers = new Object();
    }

    // Set the value of a power-up (usually 1 or 0)
    public setPowerUp(name: string, value: number): void{
      this._powers[name] = value;
    }

    // Retrieve the current value of a power-up
    public getPowerUp(name: string): number {
      return this._powers[name];
    }
  }
}
