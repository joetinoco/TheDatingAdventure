module objects {
  export interface Alternative {
    caption: string,
    targetID: number,
    feedbackText: string,
    powerUps: Object[],
    targetConditionals: Object[]
  }
}
