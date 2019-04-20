/*
Created as a parent class for the exercises so they can be bound
to one file and executed correctly
*/
export class Exercise {
  constructor () {
    this.guesses = 0
    this.hasWon = false
    this.currentGuess = -1
  }

  input () {
    return 'Ooops...'
  }

  output () {
    return 'Ooops...'
  }

  getInitialStatement () {
    return 'Ooops...'
  }
}
