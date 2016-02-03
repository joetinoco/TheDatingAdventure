module objects {
  export interface Alternative {
    caption: string,
    targetID: number,
    feedbackText: string,
    selectionLimit: number,
    powerUps: Object[],
    targetConditionals: Object[]
  }
}
