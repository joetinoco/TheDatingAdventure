module objects {
  // SceneData maps the JSON data structure
  export interface SceneData {
    // Scene ID
    ID: number,
    // Scene type (outcome, normal scene, initial scene) - Not used in this version
    Type: string,
    // The text that sets the scene for the player. Not used (it is embedded in the images in this version)
    Text: string,
    // The background image for the scene
    Image: string,
    // User alternatives for the scene - each one takes the player to a new scene.
    Alternatives: Object[],
  }
}
