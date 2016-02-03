module objects {
  export class powerUps {
    private _powers: Object; // Powerups are stored as key-value pairs, for simplicity.
    constructor(){
      this._powers = new Object();
    }

    public setPowerUp(name: string, value: number): void{
      this._powers[name] = value;
    }

    public getPowerUp(name: string): number {
      return this._powers[name];
    }
  }
}
