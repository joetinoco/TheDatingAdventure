module objects {
  // Alternative interface: maps the JSON data structure for a button's user choice
  export interface Alternative {
    // Text to be shown in the button
    caption: string,
    // The ID of the scene it takes the user to
    targetID: number,
    // A feedback text shown after the user clicks. (not used so far)
    feedbackText: string,
    // Counter for how many times a user can click the button
    selectionLimit: number,
    // Power-ups affected by the user click
    powerUps: Object[],
    // If the outcome depends on any condition (say, a power-up), this array stores this info
    targetConditionals: Object[]
    // For buttons that reload the whole game, this specifies which state set to load next.
    loadStateSet: string
  }
}
