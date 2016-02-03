module objects {
  // SceneData interface: maps the JSON data structure
  export interface SceneData {
    ID: number,
    Type: string,
    Text: string,
    Image: string,
    Alternatives: objects.Alternative[],
  }
}
