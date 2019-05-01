/*
Author:
Josiah Kerr | 15 April 2019 | Last Updated 19 April 2019
Problem:
Write a program to play a number guessing game. The program shall generate a random number
between 0 and 99. The USER inputs his/her guess, and the program shall response with "Try
higher", "Try lower" or "You got it in n trials" if the guess is correct.
*/
class S2E1 extends Exercise {
  constructor () {
    super()
    this.secretNumber = Math.round((Math.random() * 100)) - 1
  }
  input (guess = 50) {
    this.guesses++
    this.currentGuess = parseInt(guess)
  }
  output () {
    switch (true) {
      case (this.currentGuess > this.secretNumber):
        return 'Try lower'
      case (this.currentGuess < this.secretNumber):
        return 'Try higher'
      case (this.currentGuess === this.secretNumber):
        this.hasWon = true
        return 'You got it in ' + this.guesses + ' trials'
      default:
        return 'Something went wrong!'
    }
  }
  getInitialStatement () {
    return 'I have a random number between 0-99, Guess what it is!!!'
  }
}
